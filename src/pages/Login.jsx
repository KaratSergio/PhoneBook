import { NavLink } from 'react-router-dom';
import { LoginForm } from '../components/Form/authForms/LoginForm'

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p className="TextAuth">
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
