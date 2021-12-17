enum AppRoute {
  Main = '/what-to-watch8/',
  Movie = '/movies/:id',
  MyList = '/my-list',
  Player = '/player/:id',
  SingIn = '/sing-in',
  Review = '/movies/:id/new-review',
  Error = '/error',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SHOWN_COUNT_FILMS = 8;

const DEFAULT_GENRE = 'All genres';

enum ActionTypes {
  ChangeActiveGenre = 'films/changeActiveGenre',
  GetFilms = 'films/getFilms',
  IncreaseCountFilms = 'filmsList/IncreaseCountFilms',
  ResetCount = 'filmsList/ResetCount',
  ResetFilm = 'film/ResetFilm',
  LoadFilms = 'data/LoadFilms',
  LoadFilmsSimilar = 'data/LoadFilmsSimilar',
  LoadFilm = 'data/LoadFilm',
  LoadFilmPromo = 'film/LoadFilmPromo',
  LoadfilmsFavorite = 'data/LoadFilmsFavorite',
  LoadReviews = 'data/LoadReviews',
  LoadUser = 'data/LoadUser',
  RequireAuthorization = 'user/RequireAuthorization',
  RequireLogout = 'user/RequireLogout',
  RedirectToRoute = 'login/redirectToRoute',
}

enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Review = '/comments/:film_id'
}

export { AppRoute, AuthorizationStatus, ActionTypes, SHOWN_COUNT_FILMS, DEFAULT_GENRE, APIRoute };
