import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignIn,
  faRegistered,
  faContactBook,
} from '@fortawesome/free-solid-svg-icons';

import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveMenu(currentPath);
  }, [location.pathname]);

  const handleMenuClick = menu => {
    setActiveMenu(menu);
  };

  return (
    <div className={css['container-main']}>
      <div className={css['container']}>
        <div className={css['icon-box']}>
          <FontAwesomeIcon icon={faHome} />
          <NavLink
            to="/"
            className={activeMenu === '/' ? css['active'] : ''}
            onClick={() => handleMenuClick('/')}
          >
            {t('home')}
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
              {t('contacts')}
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
                  {t('register')}
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
                  {t('login')}{' '}
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default Navigation;
