import { Route, Authorization } from './types/types';

const AppRoute: Route = {
  Main: '/',
  Movies: '/movies/:id',
  MyList: '/my-list',
  Player: '/player/:id',
  SingIn: '/sing-in',
  Review: '/movies/:id/review',
  Error: '/error',
};

const AuthorizationStatus: Authorization = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
};

export { AppRoute, AuthorizationStatus };
