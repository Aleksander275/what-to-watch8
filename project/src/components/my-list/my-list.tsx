import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../..';
import { fetchFilmsFavoriteAction } from '../../store/api-action';
import { Film, State, ThunkAppDispatch } from '../../types/types';
import Loading from '../loading/loading';
import Logo from '../logo/logo';
import Movie from '../movie/movie';
import SingOut from '../sing-out/sing-out';

function MyList (): JSX.Element {
  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchFilmsFavoriteAction());
  }, []);

  const filmsFavorite = useSelector<State, Film[]>((state) => state.filmsFavorite);
  const isFilmsFavoriteLoaded = useSelector<State, boolean>((state) => state.isFilmsFavoriteLoaded);

  if (!isFilmsFavoriteLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          < Logo/>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <SingOut />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {filmsFavorite.length === 0 ?
          <p>There are no favorite movies now</p> :
          <div className="catalog__films-list">
            {filmsFavorite.map((film) => <Movie key={film.id} film={film}/>)}
          </div>}

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
