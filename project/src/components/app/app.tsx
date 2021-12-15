import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import { Film, State } from '../../types/types';
import MoviePage from '../movie-page/movie-page';
import Error from '../error/error';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import AddReview from '../review/review';
import SingIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import { isCheckedAuth } from '../../utils/utils';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history/browser-history';

function App(): JSX.Element {
  const isDataLoaded = useSelector<State, boolean>((state) => state.isDataLoaded);
  const films = useSelector<State, Film[]>((state) => state.films);
  const authorizationStatus = useSelector<State, AuthorizationStatus>((state) => state.authorizationStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.Movie}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.Error}>
          <Error />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player films={films}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Review}
          render={() => <AddReview />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.SingIn}>
          < SingIn/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
