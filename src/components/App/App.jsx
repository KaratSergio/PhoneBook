import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

import { AuthRoute } from '../Routes/AuthRoute';
import { GuestRoute } from '../Routes/GuestRoute';

import { Home } from '../../pages/Home';
import { Layout } from '../Layout/Layout';
import { Loader } from '../Loader/Loader';

const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <GuestRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <GuestRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="contacts"
              element={
                <AuthRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
