import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/types';
import Details from '../movie-page-details/movie-page-details';
import Overview from '../movie-page-overview/movie-page-overview';
import Reviews from '../movie-page-reviews/movie-page-reviews';
import { Review } from '../../types/types';

function getCurrentTab (tab: string, film: Film, reviews: Review[]): JSX.Element {
  switch (tab) {
    case 'Overview':
      return <Overview film={film}/>;
    case 'Details':
      return <Details film={film}/>;
    case 'Reviews':
      return <Reviews reviews={reviews}/>;
    default:
      return <Overview film={film} />;
  }
}

function Tabs ({film, reviews}: {film: Film, reviews: Review[]}): JSX.Element {
  const [nameTab, setNameTab] = useState('Overview');
  const [isActive, setIsActive] = useState(0);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${isActive === 0 ? 'film-nav__item--active' : ''}`}>
            <Link to={`/movies/:${film.id}`} onClick={() => {setNameTab('Overview'); setIsActive(0);}} className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${isActive === 1 ? 'film-nav__item--active' : ''}`}>
            <Link to={`/movies/:${film.id}`} onClick={() => {setNameTab('Details'); setIsActive(1);}} className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${isActive === 2 ? 'film-nav__item--active' : ''}`}>
            <Link to={`/movies/:${film.id}`} onClick={() => {setNameTab('Reviews'); setIsActive(2);}} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {getCurrentTab(nameTab, film, reviews)}

    </>
  );
}

export default Tabs;
