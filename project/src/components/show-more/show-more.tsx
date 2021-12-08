import { useDispatch } from 'react-redux';
import { SHOWN_COUNT_FILMS } from '../../const';
import { increaseCountFilms } from '../../store/actions';

function ShowMore (): JSX.Element {
  const dispatch = useDispatch();

  const handleButtonShowMore = () => {
    dispatch(increaseCountFilms(SHOWN_COUNT_FILMS));
  };

  return (
    <div className="catalog__more">
      <button onClick={handleButtonShowMore} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMore;

