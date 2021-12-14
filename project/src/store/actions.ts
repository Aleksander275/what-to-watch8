import { ActionTypes, AppRoute, AuthorizationStatus } from '../const';
import { Film, Review, User } from '../types/types';

const changeActiveGenre = (genre: string) => ({
  type: ActionTypes.ChangeActiveGenre,
  payload: genre,
} as const);

const getFilms = (films: Film[]) => ({
  type: ActionTypes.GetFilms,
  payload: films,
} as const);

const increaseCountFilms = (count: number) => ({
  type: ActionTypes.IncreaseCountFilms,
  payload: count,
} as const);

const resetCount = () => ({
  type: ActionTypes.ResetCount,
} as const);

const resetFilm = () => ({
  type: ActionTypes.ResetFilm,
} as const);

const loadFilms = (films: Film[]) => ({
  type: ActionTypes.LoadFilms,
  payload: {films},
} as const);

const loadFilmsSimilar = (filmsSimilar: Film[]) => ({
  type: ActionTypes.LoadFilmsSimilar,
  payload: {filmsSimilar},
} as const);

const loadFilm = (film: Film) => ({
  type: ActionTypes.LoadFilm,
  payload: {film},
} as const);

const loadFilmsFavorite = (filmsFavorite: Film[]) => ({
  type: ActionTypes.LoadfilmsFavorite,
  payload: {filmsFavorite},
} as const);

const loadReviews = (reviews: Review[]) => ({
  type: ActionTypes.LoadReviews,
  payload: {reviews},
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionTypes.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionTypes.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionTypes.RedirectToRoute,
  payload: url,
} as const);

const loadUser = (user: User) => ({
  type: ActionTypes.LoadUser,
  payload: {
    user,
  },
} as const);

export { resetFilm, loadFilmsSimilar, changeActiveGenre, loadFilm, loadFilmsFavorite, getFilms, increaseCountFilms, resetCount, loadFilms, loadReviews, requireAuthorization, requireLogout, redirectToRoute, loadUser };
