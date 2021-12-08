import { ActionTypes } from '../const';
import { Film } from '../types/types';

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

export { changeActiveGenre, getFilms, increaseCountFilms, resetCount };
