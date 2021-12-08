import { ActionTypes, DEFAULT_GENRE, SHOWN_COUNT_FILMS } from '../const';
import { films } from '../mocks/films';
import { ActionsType, State } from '../types/types';

const initialState: State = {
  genre: DEFAULT_GENRE,
  films: films,
  count: SHOWN_COUNT_FILMS,
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
    default: return state;
  }
}

export { reducer };

