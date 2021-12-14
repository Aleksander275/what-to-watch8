import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { State, User } from '../../types/types';

function SingOut (): JSX.Element | null {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const user = useSelector<State, User>((state) => state.user);
  const authorizationStatus = useSelector<State, string>((state) => state.authorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item" onClick={handleLogout}>
        <a href="/" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default SingOut;
