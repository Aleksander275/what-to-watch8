import { Film } from '../../types/types';
import Movie from '../movie/movie';

function MoviesList ({films}: {films: Film[]}): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <Movie key={film.id} film={film} />)}
    </div>
  );
}

export default MoviesList;
