import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css['container']}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts">Contacts</NavLink>
        ) : (
          <div className={css['sign-box']}>
            {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
            {!isLoggedIn && <NavLink to="/login">Log In</NavLink>}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
