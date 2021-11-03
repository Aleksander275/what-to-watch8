import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import { MainProps } from '../../types/types';
import MoviePage from '../movie-page/movie-page';
import Error from '../error/error';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Review from '../review/review';
import SingIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';

function App({ title, genre, year, movieCount }: MainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main year={year} genre={genre} movieCount={movieCount} title={title}/>
        </Route>
        <Route exact path={AppRoute.Movies}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.Error}>
          <Error />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route exact path={AppRoute.Review}>
          <Review />
        </Route>
        <Route exact path={AppRoute.SingIn}>
          < SingIn/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
