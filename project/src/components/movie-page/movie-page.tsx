import Logo from '../logo/logo';
import { Film } from '../../types/types';
import Tabs from '../tabs/tabs';
import { useParams } from 'react-router-dom';
import React from 'react';
import { Review } from '../../types/types';
import Movie from '../movie/movie';

function MoviePage ({films, reviews}: {films: Film[], reviews: Review[]}): JSX.Element {

  const param: {id: string} = useParams();
  const id = param.id.slice(1);

  const filmId = films.findIndex((item) => item.id.toString() === id);

  const currentFilm = films[filmId];

  const reviewsId = reviews.filter((item) => item.id.toString() === id);

  const newFilms = [...films];

  const filmsByGenre = newFilms.sort((film) => film.genre === currentFilm.genre ? -1 : 1);

  const similarMovie = filmsByGenre.filter((film) => film.id !== currentFilm.id).slice(0, 4);

  return (
    <React.Fragment>
      <section className ="film-card film-card--full">
        <div className ="film-card__hero">
          <div className ="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className ="visually-hidden">WTW</h1>

          <header className ="page-header film-card__head">
            <div className ="logo">
              < Logo/>
            </div>

            <ul className ="user-block">
              <li className ="user-block__item">
                <div className ="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className ="user-block__item">
                <a href="/" className ="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className ="film-card__wrap">
            <div className ="film-card__desc">
              <h2 className ="film-card__title">{films[filmId].name}</h2>
              <p className ="film-card__meta">
                <span className ="film-card__genre">{films[filmId].genre}</span>
                <span className ="film-card__year">{films[filmId].released}</span>
              </p>

              <div className ="film-card__buttons">
                <button className ="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className ="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className ="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className ="film-card__wrap film-card__translate-top">
          <div className ="film-card__info">
            <div className ="film-card__poster film-card__poster--big">
              <img src={films[filmId].posterImage} alt={films[filmId].name} width="218" height="327" />
            </div>

            <div className ="film-card__desc">

              <Tabs film={films[filmId]} reviews={reviewsId} />

            </div>
          </div>
        </div>
      </section>

      <div className ="page-content">
        <section className ="catalog catalog--like-this">
          <h2 className ="catalog__title">More like this</h2>

          <div className ="catalog__films-list">
            {similarMovie.map((film) => <Movie key={film.id} film={film}/>)}
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
