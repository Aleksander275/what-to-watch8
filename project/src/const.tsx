import { Route, Authorization } from './types/types';

const AppRoute: Route = {
  Main: '/',
  Movies: '/movies/:id',
  MyList: '/my-list',
  Player: '/player/:id',
  SingIn: '/sing-in',
  Review: '/movies/:id/new-review',
  Error: '/error',
};

const AuthorizationStatus: Authorization = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
};

const SHOWN_COUNT_FILMS = 4;

const DEFAULT_GENRE = 'All genres';

enum ActionTypes {
  ChangeActiveGenre = 'films/changeActiveGenre',
  GetFilms = 'films/getFilms',
  IncreaseCountFilms = 'filmsList/IncreaseCountFilms',
  ResetCount = 'filmsList/ResetCount',
}

export { AppRoute, AuthorizationStatus, ActionTypes, SHOWN_COUNT_FILMS, DEFAULT_GENRE };
