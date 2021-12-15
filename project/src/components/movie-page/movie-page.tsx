import Logo from '../logo/logo';
import { Film, State, ThunkAppDispatch } from '../../types/types';
import Tabs from '../tabs/tabs';
import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Movie from '../movie/movie';
import SingOut from '../sing-out/sing-out';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentFilmAction, fetchFilmsSimilarAction, checkedStatusCurrentFilm } from '../../store/api-action';
import { store } from '../..';
import Loading from '../loading/loading';
import { resetFilm } from '../../store/actions';

function MoviePage (): JSX.Element {

  const param: {id: string} = useParams();
  const id = param.id;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(id));
    (store.dispatch as ThunkAppDispatch)(fetchFilmsSimilarAction(id));

    return () => {
      dispatch(resetFilm());
    };
  }, [id, dispatch]);

  const currentFilm = useSelector<State, Film>((state) => state.film);
  const isFilmLoaded = useSelector<State, boolean>((state) => state.isFilmLoaded);
  const filmsSimilar = useSelector<State, Film[]>((state) => state.filmsSimilar);
  const isFilmsSimilarLoaded = useSelector<State, boolean>((state) => state.isFilmsSimilarLoaded);
  const authorizationStatus = useSelector<State, string>((state) => state.authorizationStatus);

  const isFavorite = currentFilm?.isFavorite;

  const checkedStatusFilm = (filmFavoriteId: number, status: number) => {
    if (!filmFavoriteId) {return;}
    dispatch(checkedStatusCurrentFilm(filmFavoriteId, status));
  };

  if (!isFilmLoaded && !isFilmsSimilarLoaded) {
    return (<Loading />);
  }

  return (
    <React.Fragment>
      <section className ="film-card film-card--full" style={{background: currentFilm?.backgroundColor}}>
        <div className ="film-card__hero">
          <div className ="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>

          <h1 className ="visually-hidden">WTW</h1>

          <header className ="page-header film-card__head">
            <div className ="logo">
              < Logo/>
            </div>

            <SingOut />

          </header>

          <div className ="film-card__wrap">
            <div className ="film-card__desc">
              <h2 className ="film-card__title">{currentFilm?.name}</h2>
              <p className ="film-card__meta">
                <span className ="film-card__genre">{currentFilm?.genre}</span>
                <span className ="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className ="film-card__buttons">
                <button className ="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${currentFilm?.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className ="btn btn--list film-card__button" type="button" style={{justifyContent: 'center'}} onClick={() => history.push(AppRoute.MyList)}>
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.Auth ?
                  <button className ="btn btn--list film-card__button" type="button" onClick={() => checkedStatusFilm(currentFilm.id, Number(!isFavorite))}>
                    {!isFavorite ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref='#add'></use>
                      </svg> : ''}
                    <span>{isFavorite ? 'Remove from my List' : 'Add to my list'}</span>
                  </button> : ''}

                <Link to={`/movies/${currentFilm?.id}/new-review`} className ="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className ="film-card__wrap film-card__translate-top">
          <div className ="film-card__info">
            <div className ="film-card__poster film-card__poster--big">
              <img src={currentFilm?.posterImage} alt={currentFilm?.name} width="218" height="327" />
            </div>

            <div className ="film-card__desc">

              <Tabs film={currentFilm} />

            </div>
          </div>
        </div>
      </section>

      <div className ="page-content">
        <section className ="catalog catalog--like-this">
          <h2 className ="catalog__title">More like this</h2>

          <div className ="catalog__films-list">
            {filmsSimilar.map((film) => <Movie key={film.id} film={film}/>)}
          </div>
        </section>

        <footer className ="page-footer">
          <div className ="logo">
            <a href="main.html" className ="logo__link logo__link--light">
              <span className ="logo__letter logo__letter--1">W</span>
              <span className ="logo__letter logo__letter--2">T</span>
              <span className ="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className ="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
