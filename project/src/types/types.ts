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

export type { MainProps, Route, Authorization };
