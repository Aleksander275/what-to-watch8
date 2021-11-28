import { useState } from 'react';

function Rating ({index}: {index:number}): JSX.Element {
  const [reviewCount, setReviewCount] = useState('');
  return (
    <>
      <input onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setReviewCount(evt.target.id)} className="rating__input" id={`star-${index}`} type="radio" name="rating" value={reviewCount} />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

export default Rating;
