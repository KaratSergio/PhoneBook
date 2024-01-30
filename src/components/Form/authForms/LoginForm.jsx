import { useDispatch, useSelector } from 'react-redux';
import { selectErrorLogin } from '../../../redux/auth/selectors';
import { logIn } from '../../../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import css from './Forms.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectErrorLogin);
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <div className={css['ring']}>
        {errorLogin && <div>{t('loginFormError')}</div>}
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
        <div className={css['login']}>
          <h2>{t('loginFormTitle')}</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label className={css['inputBx']}>
              <input
                type="email"
                name="email"
                placeholder={t('loginFormEmailPlaceholder')}
                autoComplete="username"
                required
                autoFocus
              />
            </label>
            <label className={css['inputBx']}>
              <input
                type="password"
                name="password"
                placeholder={t('loginFormPasswordPlaceholder')}
                autoComplete="current-password"
                required
              />
            </label>
            <button className={css['button']} type="submit">
              {t('loginFormButton')}
            </button>
            <p className={css['text']}>
              {t('loginFormNoAccount')}{' '}
              <NavLink className={css['text-link']} to="/register">
                {t('registerFormButton')}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
