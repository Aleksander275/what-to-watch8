/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../..';
import { fetchReviewsAction } from '../../store/api-action';
import { Review, State, ThunkAppDispatch } from '../../types/types';
import ReviewText from '../review-text/review-text';

function getFirstHalfOfReviews (reviews: Review[]) {
  const lengthHalhOfReviews = Math.ceil(reviews.length / 2);
  return reviews.slice(0, lengthHalhOfReviews);
}

function getLastHalfOfReviews (reviews: Review[]) {
  return reviews.slice(getFirstHalfOfReviews(reviews).length);
}

function Reviews ({id}: {id: number}): JSX.Element {
  const reviews = useSelector<State, Review[]>((state) => state.reviews);

  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchReviewsAction(id.toString()));
  }, [id]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {getFirstHalfOfReviews(reviews).map((review, index) => <ReviewText key={index} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {getLastHalfOfReviews(reviews).map((review, index) => <ReviewText key={index} review={review}/>)}
      </div>
    </div>
  );
}

export default Reviews;
