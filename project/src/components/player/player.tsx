import { useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Film } from '../../types/types';
import { formatTimeElapsed } from '../../utils/utils';
import Loading from '../loading/loading';

function Player ({films}: {films: Film[]}): JSX.Element {
  const param: { id: string } = useParams();
  const id = param.id;
  const filmId = films.findIndex((item) => item.id.toString() === id);
  const currentFilm = films[filmId];

  const history = useHistory();
  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ isVideoLoading, setIsVideoLoading ] = useState(true);
  const [ progress, setProgress ] = useState(0);
  const [ time, setTime ] = useState('00:00');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlerClickButtonPlay = () => {
    if (videoRef.current !== null) {

      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlerClickExit = () => {
    history.push(`/movies/${currentFilm.id}`);
  };

  const handlerFullScreen = () => {
    if (videoRef.current !== null) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlerClickPlay = () => {
    setIsPlaying(true);
  };

  const handlerClickPause = () => {
    setIsPlaying(false);
  };
  const handlerWaiting = () => {
    setIsVideoLoading(true);
  };

  const handleLoadedData = () => {
    setIsVideoLoading(false);
  };

  const handlerPlaying = () => {
    setIsVideoLoading(false);
  };

  const handlerTimeUpdate = (evt: React.SyntheticEvent<HTMLVideoElement>) => {
    const { currentTarget } = evt;
    const percentage = currentTarget.currentTime * 100 / currentTarget.duration;
    const timeElapsed = formatTimeElapsed(currentTarget.duration - currentTarget.currentTime);

    setTime(timeElapsed);
    setProgress(percentage);
  };

  if (isVideoLoading) {
    <Loading />;
  }

  return (
    <div className ="player">
      <video
        src={currentFilm.videoLink}
        ref={videoRef}
        className ="player__video"
        poster={currentFilm.backgroundImage}
        autoPlay
        onPlay={handlerClickPlay}
        onPause={handlerClickPause}
        onTimeUpdate={handlerTimeUpdate}
        onWaiting={handlerWaiting}
        onPlaying={handlerPlaying}
        onLoadedData={handleLoadedData}
      >
      </video>

      <button type="button" className ="player__exit" onClick={handlerClickExit}>Exit</button>

      <div className ="player__controls">
        <div className ="player__controls-row">
          <div className ="player__time">
            <progress className ="player__progress" value={progress} max="100"></progress>
            <div className ="player__toggler" style = {{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className ="player__time-value">{time}</div>
        </div>

        <div className ="player__controls-row">
          <button type="button" className ="player__play" onClick={handlerClickButtonPlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { isPlaying ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className ="player__name">Transpotting</div>

          <button type="button" className ="player__full-screen" onClick={handlerFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
