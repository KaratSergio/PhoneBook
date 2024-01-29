import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignIn, faRegistered, faContactBook } from '@fortawesome/free-solid-svg-icons';

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
        <div className={css['icon-box']}>
          <FontAwesomeIcon icon={faHome} />
          <NavLink
            to="/"
            className={activeMenu === '/' ? css['active'] : ''}
            onClick={() => handleMenuClick('/')}
          >
            Home
          </NavLink>
        </div>
        {isLoggedIn ? (
          <div className={css['icon-box']}>
            <FontAwesomeIcon icon={faContactBook} />
            <NavLink
              to="/contacts"
              className={activeMenu === '/contacts' ? css['active'] : ''}
              onClick={() => handleMenuClick('/contacts')}
            >
              Contacts
            </NavLink>
          </div>
        ) : (
          <div className={css['sign-box']}>
            {!isLoggedIn && (
              <div className={css['icon-box']}>
                <FontAwesomeIcon icon={faRegistered} />
                <NavLink
                  to="/register"
                  className={activeMenu === '/register' ? css['active'] : ''}
                  onClick={() => handleMenuClick('/register')}
                >
                  Register
                </NavLink>
              </div>
            )}
            {!isLoggedIn && (
              <div className={css['icon-box']}>
                <FontAwesomeIcon icon={faSignIn} />
                <NavLink
                  to="/login"
                  className={activeMenu === '/login' ? css['active'] : ''}
                  onClick={() => handleMenuClick('/login')}
                >
                  Log In
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
