import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { t } = useTranslation(); 

  return (
    <div className={css['container']}>
      <p>{t('welcomeMessage', { name: user.name })}</p>
      <button
        className={css['button']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <FontAwesomeIcon icon={faSignOut} />
        {t('logoutButton')}
      </button>
    </div>
  );
};

export default UserMenu;
