import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { NavLink } from 'react-router-dom';

import css from './Forms.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
            <h2>Registration</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label className={css['inputBx']}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="nick-name"
                  minLength={3}
                  autoFocus
                />
              </label>
              <label className={css['inputBx']}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e-mail@gmail.com"
                  autoComplete="username"
                />
              </label>
              <label className={css['inputBx']}>
                <input
                  type="password"
                  name="password"
                  minLength={7}
                  required
                  placeholder="password"
                  autoComplete="current-password"
                />
              </label>
              <button className={css['button']} type="submit">
                Register
              </button>
              <p className={css['text']}>
                Already registered?{' '}
                <NavLink className={css['text-link']} to={'/login'}>
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      );
};
