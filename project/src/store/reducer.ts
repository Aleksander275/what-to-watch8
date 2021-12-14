import { ActionTypes, DEFAULT_GENRE, SHOWN_COUNT_FILMS, AuthorizationStatus } from '../const';
import { ActionsType, State } from '../types/types';

const initialState: State = {
  genre: DEFAULT_GENRE,
  films: [],
  filmsFavorite: [],
  filmsSimilar: [],
  count: SHOWN_COUNT_FILMS,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  isFilmsSimilarLoaded: false,
  isFilmsFavoriteLoaded: false,
  isFilmLoaded: false,
  user: {
    id: 0,
    email: '',
    name: '',
    avatarUrl: '',
    token: '',
  },
  film: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
};

function reducer (state: State = initialState, action: ActionsType): State {
  switch (action.type) {
    case ActionTypes.ChangeActiveGenre:
      return { ...state, genre: action.payload };
    case ActionTypes.GetFilms:
      return { ...state, films: action.payload };
    case ActionTypes.IncreaseCountFilms:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.ResetCount:
      return { ...state, count: initialState.count };
    case ActionTypes.ResetFilm:
      return { ...state, film: initialState.film };
    case ActionTypes.LoadFilms: {
      const {films} = action.payload;
      return { ...state, films, isDataLoaded: true };
    }
    case ActionTypes.LoadFilmsSimilar: {
      const {filmsSimilar} = action.payload;
      return { ...state, filmsSimilar, isFilmsSimilarLoaded: true };
    }
    case ActionTypes.LoadFilm: {
      const {film} = action.payload;
      return { ...state, film, isFilmLoaded: true };
    }
    case ActionTypes.LoadfilmsFavorite: {
      const {filmsFavorite} = action.payload;
      return { ...state, filmsFavorite, isFilmsFavoriteLoaded: true };
    }
    case ActionTypes.LoadReviews: {
      const { reviews } = action.payload;
      return { ...state, reviews };
    }
    case ActionTypes.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionTypes.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionTypes.LoadUser: {
      const {user} = action.payload;
      return { ...state, user, authorizationStatus: AuthorizationStatus.Auth};
    }
    default: return state;
  }
}

export { reducer };

