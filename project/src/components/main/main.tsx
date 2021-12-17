import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';
import { checkedStatusPromoFilm } from '../../store/api-action';
import { Film, State } from '../../types/types';
import GenresList from '../genres-list/genres-list';
import Loading from '../loading/loading';
import LogoFooter from '../logo-footer/logo-footer';
import Logo from '../logo/logo';
import MoviesList from '../movie-list/movie-list';
import ShowMore from '../show-more/show-more';
import SingOut from '../sing-out/sing-out';

function Main (): JSX.Element {
  const films = useSelector<State, Film[]>((state) => state.films);
  const filmPromo = useSelector<State, Film | null>((state) => state.filmPromo);
  const activeGenre = useSelector<State, string>((state: State) => state.genre);
  const count = useSelector<State, number>((state: State) => state.count);
  const authorizationStatus = useSelector<State, string>((state) => state.authorizationStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  const isFavorite = filmPromo?.isFavorite;

  const checkedStatusFilm = (filmFavoriteId: number, status: number) => {
    if (!filmFavoriteId) {return;}
    dispatch(checkedStatusPromoFilm(filmFavoriteId, status));
  };

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

                {authorizationStatus === AuthorizationStatus.Auth ?
                  <button className ="btn btn--list film-card__button" type="button" onClick={() => checkedStatusFilm(filmPromo.id, Number(!isFavorite))}>
                    {!isFavorite ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref='#add'></use>
                      </svg> : ''}
                    <span>{isFavorite ? 'Remove from my List' : 'Add to my list'}</span>
                  </button> : ''}

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
          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>);
}

export default Main;
