import Logo from '../logo/logo';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Film, State } from '../../types/types';
import SingOut from '../sing-out/sing-out';
import { useCallback, useRef, useState } from 'react';
import { reviewAction } from '../../store/api-action';
import Rating from './rating';

const NUMBER_STARS = 10;

function AddReview (): JSX.Element {
  const param: {id: string} = useParams();
  const id = param.id;
  const films = useSelector<State, Film[]>((state) => state.films);
  const filmId = films.findIndex((item) => item.id.toString() === id);
  const currentFilm = films[filmId];
  const textReview = useRef<HTMLTextAreaElement | null>(null);
  const [selectedStar, setSelectedStar] = useState<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = useCallback((reviewsId: number) => {
    if (!selectedStar) {return;}

    const selectedRating = parseInt(selectedStar.value, 10);

    if (textReview.current !== null && selectedRating !== null) {
      dispatch(reviewAction({
        rating: selectedRating,
        comment: textReview.current.value,
        id: reviewsId,
      }));

      textReview.current.value = '';
      selectedStar.checked = false;
      setSelectedStar(null);
    }
  }, [selectedStar, dispatch]);


  const handleStarCount = useCallback((evt) => setSelectedStar(evt.target),[]);

  return (
    <section className="film-card film-card--full" style={{background: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            < Logo/>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/movies/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/movies/${currentFilm.id}/new-review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <SingOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={(evt) => {evt.preventDefault(); handleSubmit(currentFilm.id);}}>
          <div className="rating">
            <div className="rating__stars">
              {/*eslint-disable-next-line react/no-array-index-key*/}
              {new Array(NUMBER_STARS).fill(null).map((_, index) => <Rating index={index} setRating={handleStarCount} key={index}/>)}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              ref={textReview}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReview;
