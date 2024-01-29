import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveMenu(currentPath);
  }, [location.pathname]);

  const handleMenuClick = menu => {
    setActiveMenu(menu);
  };

  return (
    <>
      <div className={css['container']}>
        <NavLink
          to="/"
          className={activeMenu === '/' ? css['active'] : ''}
          onClick={() => handleMenuClick('/')}
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            to="/contacts"
            className={activeMenu === '/contacts' ? css['active'] : ''}
            onClick={() => handleMenuClick('/contacts')}
          >
            Contacts
          </NavLink>
        ) : (
          <div className={css['sign-box']}>
            {!isLoggedIn && (
              <NavLink
                to="/register"
                className={activeMenu === '/register' ? css['active'] : ''}
                onClick={() => handleMenuClick('/register')}
              >
                Register
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className={activeMenu === '/login' ? css['active'] : ''}
                onClick={() => handleMenuClick('/login')}
              >
                Log In
              </NavLink>
            )}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
