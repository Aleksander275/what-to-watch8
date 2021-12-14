import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { Film, State } from '../../types/types';
import GenresList from '../genres-list/genres-list';
import Loading from '../loading/loading';
import Logo from '../logo/logo';
import MoviesList from '../movie-list/movie-list';
import ShowMore from '../show-more/show-more';
import SingOut from '../sing-out/sing-out';

function Main (): JSX.Element {
  const films = useSelector<State, Film[]>((state) => state.films);
  const filmPromo = useSelector<State, Film | null>((state) => state.filmPromo);
  const activeGenre = useSelector<State, string>((state: State) => state.genre);
  const count = useSelector<State, number>((state: State) => state.count);
  const history = useHistory();

  const filterFilms = films.filter((film) => (activeGenre === 'All genres') ? film : film.genre === activeGenre);
  const renderedFilms = filterFilms.slice(0, count);

  const isShowMore = films.length > count && renderedFilms.length < filterFilms.length;

  if (filmPromo === null) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromo.backgroundImage} alt={filmPromo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            < Logo/>
          </div>

          <SingOut />

        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmPromo.posterImage} alt={filmPromo.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre}</span>
                <span className="film-card__year">{filmPromo.released}</span>
              </p>

              <div className="film-card__buttons">

                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${filmPromo.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button className="btn btn--list film-card__button" type="button" style={{justifyContent: 'center'}} onClick={() => history.push(AppRoute.MyList)}>
                  <span>My list</span>
                </button>

                <button className ="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>Add my list</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">

          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={films} />

          <MoviesList films={renderedFilms} />

          {isShowMore && <ShowMore />}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href = "/" className="logo__link logo__link--light">
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
    </React.Fragment>);
}

export default Main;
