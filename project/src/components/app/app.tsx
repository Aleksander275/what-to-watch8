import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import { Film, Review } from '../../types/types';
import MoviePage from '../movie-page/movie-page';
import Error from '../error/error';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import AddReview from '../review/review';
import SingIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';

function App({films, reviews}: {films: Film[], reviews: Review[]}): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main films={films}/>
        </Route>
        <Route exact path={AppRoute.Movies}>
          <MoviePage films={films} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.Error}>
          <Error />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player films={films}/>
        </Route>
        <Route exact path={AppRoute.Review}>
          <AddReview />
        </Route>
        <Route exact path={AppRoute.SingIn}>
          < SingIn/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// {films}: {films: Film[]}, {reviews}: {reviews: Review[]}
