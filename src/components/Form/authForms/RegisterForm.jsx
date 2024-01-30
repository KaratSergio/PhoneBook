import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import css from './Forms.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css['ring']}>
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className={css['login']}>
        <h2>{t('registerFormTitle')}</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className={css['inputBx']}>
            <input
              type="text"
              name="name"
              required
              placeholder={t('registerFormName')}
              minLength={3}
              autoFocus
            />
          </label>
          <label className={css['inputBx']}>
            <input
              type="email"
              name="email"
              required
              placeholder={t('registerFormEmail')}
              autoComplete="username"
            />
          </label>
          <label className={css['inputBx']}>
            <input
              type="password"
              name="password"
              minLength={7}
              required
              placeholder={t('registerFormPassword')}
              autoComplete="current-password"
            />
          </label>
          <button className={css['button']} type="submit">
            {t('registerFormButton')}
          </button>
          <p className={css['text']}>
            {t('registerFormLink')}{' '}
            <NavLink className={css['text-link']} to={'/login'}>
              {t('login')}
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
