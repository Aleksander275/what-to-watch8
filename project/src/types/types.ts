import { changeActiveGenre, getFilms, increaseCountFilms, resetCount } from '../store/actions';

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
  count: number;
}

type ActionsType =
  | ReturnType<typeof changeActiveGenre>
  | ReturnType<typeof getFilms>
  | ReturnType<typeof increaseCountFilms>
  | ReturnType<typeof resetCount>

export type { MainProps, Route, Authorization, Film, Review, State, ActionsType };
