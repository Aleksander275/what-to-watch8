import { ActionsType, Film, State } from '../../types/types';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import { changeActiveGenre, resetCount } from '../../store/actions';
import { useState } from 'react';

const mapStateToProps = ({genre: genreActive}: State) => ({
  genreActive,
});

type Films = {
  films: Film[];
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => ({
  onChangeActiveGenre (genre: string) {
    dispatch(changeActiveGenre(genre));
  },
  onResetCount () {
    dispatch(resetCount());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Films;

function GenresList ({films, genreActive, onChangeActiveGenre, onResetCount}: ConnectedComponentProps): JSX.Element {
  const [isActive, setIsActive] = useState(genreActive);
  const genres = ['All genres', ...new Set(films.map((film) => film.genre))];

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

export {GenresList};
export default connector(GenresList);
