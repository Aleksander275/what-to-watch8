import { changeActiveGenre, resetCount } from '../../store/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Film, State } from '../../types/types';

function GenresList ({films}: {films: Film[]}): JSX.Element {
  const genreActive = useSelector<State, string>((state) => state.genre);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(genreActive);
  const genres = ['All genres', ...new Set(films.map((film) => film.genre))];

  const onChangeActiveGenre = (genre: string) => {
    dispatch(changeActiveGenre(genre));
  };

  const onResetCount = () => {
    dispatch(resetCount());
  };

  const selectedGenre =  (genre: string) => isActive === genre ? 'catalog__genres-item catalog__genres-item--active': 'catalog__genres-item';

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={selectedGenre(genre)} key={genre}>
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onChangeActiveGenre(genre);
              setIsActive(genre);
              onResetCount();
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
