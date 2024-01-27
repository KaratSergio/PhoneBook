import { useDispatch, useSelector } from 'react-redux';
import { selectErrorLogin } from '../../../redux/auth/selectors';
import { logIn } from '../../../redux/auth/operations';
import { NavLink } from 'react-router-dom';

import css from './Forms.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectErrorLogin);

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
        {errorLogin && <div>Error login</div>}
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
        <div className={css['login']}>
          <h2>Login</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label className={css['inputBx']}>
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                autoComplete="username"
                required
                autoFocus
              />
            </label>
            <label className={css['inputBx']}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </label>
            <button className={css['button']} type="submit">
              Sign In
            </button>
            <p className={css['text']}>
              Don't have an account?{' '}
              <NavLink className={css['text-link']} to="/register">
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
