import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from 'pages/Home';
import RestrictedRoute from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks/useAuth';
import PrivateRoute from 'components/PrivateRoute';

const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Contacts = lazy(() => import('./pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Home />} />
        }
      >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
      />
    </Routes>
  );
};

export default App;
