import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { State } from '../../types/types';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const status = useSelector<State, string>((state) => state.authorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        status === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SingIn} />
      )}
    />
  );
}

export default PrivateRoute;
