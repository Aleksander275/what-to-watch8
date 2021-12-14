import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { changeActiveGenre, getFilms, increaseCountFilms, loadFilm, loadFilmPromo, loadFilms, loadFilmsFavorite, loadFilmsSimilar, loadReviews, loadUser, redirectToRoute, requireAuthorization, requireLogout, resetCount, resetFilm } from '../store/actions';

type MainProps = {
  title: string,
  genre: string,
  year: number,
  movieCount: number,
};

type Route = {
  Main: string,
  Movies: string,
  MyList: string,
  Player: string,
  SingIn: string,
  Review: string,
  Error: string,
}

type Authorization = {
  Auth: string,
  NoAuth: string,
  Unknown: string,
}

type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

type UserFromServer = {
  'id': number,
  'email': string,
  'name': string,
  'avatar_url': string,
  'token': string,
}

type User = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: string,
}

type Review = {
  id: number,
  user: {
    id: number,
    name: string,
  }
  rating: number,
  comment: string,
  date: string,
}

type State = {
  genre: string;
  films: Film[];
  filmPromo: Film | null;
  filmsSimilar: Film[];
  filmsFavorite: Film[];
  film: Film;
  count: number;
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  isFilmLoaded: boolean;
  isDataLoaded: boolean;
  isFilmsSimilarLoaded: boolean;
  isFilmsFavoriteLoaded: boolean;
  user: User;
}

type FilmFromServer = {
  'id': number,
  'name': string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'director': string,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'is_favorite': boolean,
}

type AuthData = {
  email: string;
  password: string;
};

type ReviewData = {
  rating: number;
  comment: string | undefined;
  id: number;
}

type ActionsType =
  | ReturnType<typeof changeActiveGenre>
  | ReturnType<typeof getFilms>
  | ReturnType<typeof increaseCountFilms>
  | ReturnType<typeof resetCount>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof loadUser>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadFilmsFavorite>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadFilmsSimilar>
  | ReturnType<typeof resetFilm>
  | ReturnType<typeof loadFilmPromo>

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, ActionsType>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, ActionsType>;

export type { ReviewData, MainProps, Route, Authorization, Film, Review, State, ActionsType, AuthData, ThunkActionResult, ThunkAppDispatch, FilmFromServer, UserFromServer, User };
