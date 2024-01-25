import { UseSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { UserMenu } from '../UserMenu/UserMenu'

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts">Contacts</NavLink>
        ) : (
          <div>
            {!isLoggedIn && <Nav to="/register">Register</Nav>}
            {!isLoggedIn && <Nav to="/login">Log In</Nav>}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;