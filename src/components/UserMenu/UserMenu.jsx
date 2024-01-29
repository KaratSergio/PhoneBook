import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css['container']}>
      <p>Welcome, {user.name}</p>
      <button
        className={css['button']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <FontAwesomeIcon icon={faSignOut} />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
