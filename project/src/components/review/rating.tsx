import { ChangeEventHandler } from 'react';

function Rating ({index, setRating}: {index:number, setRating: ChangeEventHandler}): JSX.Element {

  return (
    <>
      <input onChange={setRating} className="rating__input" id={`star-${index}`} type="radio" name="rating" value={-index + 10} />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

export default Rating;
