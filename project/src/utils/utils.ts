import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { AuthorizationStatus } from '../const';
import { Film, FilmFromServer, User, UserFromServer } from '../types/types';

const adaptToClient = (filmFromServer: FilmFromServer): Film => {
  const adaptedFilm = Object.assign(
    {},
    filmFromServer,
    {
      posterImage: filmFromServer['poster_image'],
      previewImage: filmFromServer['preview_image'],
      backgroundImage: filmFromServer['background_image'],
      backgroundColor: filmFromServer['background_color'],
      videoLink: filmFromServer['video_link'],
      previewVideoLink: filmFromServer['preview_video_link'],
      scoresCount: filmFromServer['scores_count'],
      runTime: filmFromServer['run_time'],
      isFavorite: filmFromServer['is_favorite'],
    },
  );

  return adaptedFilm;
};

const adaptUserToClient =(userFromServer: UserFromServer): User => {
  const adaptedUser = Object.assign(
    {},
    userFromServer,
    {
      avatarUrl: userFromServer['avatar_url'],
    },
  );

  return adaptedUser;
};

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

dayjs.extend(duration);

const formatTimeElapsed = (period: number): string =>
  dayjs
    .duration(period, 'seconds')
    .format('-HH:mm:ss')
    .replace('00:', '');

const describingFilm = (count: number): string => {
  switch (true) {
    case 0 <= count && count < 3:
      return 'Bad';
    case 3 <= count && count <  5:
      return 'Normal';
    case 5 <= count && count <  8:
      return 'Good';
    case 8 <= count && count <  10:
      return 'Very good';
    case 10 <= count:
      return 'Awesome';
    default:
      return '';
  }
};

export { adaptToClient, adaptUserToClient, isCheckedAuth, formatTimeElapsed, describingFilm };
