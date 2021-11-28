import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/types';

const FILM_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Movie ({film}: {film: Film}): JSX.Element {

  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(false);

  const handleMouseLeave = () => {
    setIsHover(false);
    setShow(false);
  };

  useEffect(() => {
    if (!isHover) {return;}
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isHover]);

  const showVideo = isHover && show;

  return (
    <article onMouseEnter={() => setIsHover(true)} onMouseLeave={handleMouseLeave} className="small-film-card catalog__films-card">

      {showVideo &&
        <div style={FILM_STYLE}>
          <video src={film.previewVideoLink} autoPlay muted poster={film.previewImage} width="280" height="175" style={{objectFit: 'cover'}} />
        </div>}
      {!showVideo &&
        <div className="small-film-card__image">
          <img src={film.posterImage} alt={film.name} width="280" height="175" />
        </div>}

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/movies/:${film.id}`}>{film.name}</Link>
      </h3>

    </article>
  );
}

export default Movie;
