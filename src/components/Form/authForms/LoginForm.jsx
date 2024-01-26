import { useDispatch, useSelector } from 'react-redux';
import { selectErrorLogin } from '../../../redux/auth/selectors';
import { logIn } from '../../../redux/auth/operations';

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
      {errorLogin && <div>Error login</div>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
