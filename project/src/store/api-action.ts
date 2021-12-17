import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { AuthData, FilmFromServer, Review, ThunkActionResult, ReviewData } from '../types/types';
import { adaptToClient, adaptUserToClient } from '../utils/utils';
import { loadFilm, loadFilmPromo, loadFilms, loadFilmsFavorite, loadFilmsSimilar, loadReviews, loadUser, redirectToRoute, requireLogout } from './actions';
import {toast} from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';
const REVIEW_FAIL_MESSAGE = 'Не указан текст комментария';

const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClient(film));
    dispatch(loadFilms(adaptedData));
  };

const fetchCurrentFilmAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer>(`${APIRoute.Films}/${id}`);
    const adaptedFilm = adaptToClient(data);
    dispatch(loadFilm(adaptedFilm));
  };

const fetchFilmPromoAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer>(APIRoute.Promo);
    const adaptedFilm = adaptToClient(data);
    dispatch(loadFilmPromo(adaptedFilm));
  };

const fetchFilmsSimilarAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(`${APIRoute.Films}/${id}/similar`);
    const adaptedData = data.map((film) => adaptToClient(film));
    dispatch(loadFilmsSimilar(adaptedData));
  };

const fetchFilmsFavoriteAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Favorite);
    const adaptedData = data.map((film) => adaptToClient(film));
    dispatch(loadFilmsFavorite(adaptedData));
  };

const fetchReviewsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  };

const checkedStatusCurrentFilm = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(`/favorite/${id}/${status}`);
    dispatch(fetchCurrentFilmAction(id.toString()));
  };

const checkedStatusPromoFilm = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(`/favorite/${id}/${status}`);
    dispatch(fetchFilmPromoAction());
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then((response) => {
          const adaptedData = adaptUserToClient(response.data);
          dispatch(loadUser(adaptedData));
        });
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(checkAuthAction());
    dispatch(redirectToRoute(AppRoute.Main));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(loadUser({id: 0, email: '', name: '', avatarUrl: '', token: ''}));
    dispatch(requireLogout());
  };

const reviewAction = ({rating, comment, id}: ReviewData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(`/comments/${id}`, {rating, comment});
    } catch {
      toast.error(REVIEW_FAIL_MESSAGE);
    }
  };

export { fetchFilmsAction, checkAuthAction, loginAction, logoutAction, fetchReviewsAction, reviewAction, fetchFilmsFavoriteAction, checkedStatusCurrentFilm, fetchCurrentFilmAction, fetchFilmsSimilarAction, fetchFilmPromoAction, checkedStatusPromoFilm };
