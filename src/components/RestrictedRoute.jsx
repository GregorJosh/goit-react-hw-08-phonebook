import { Navigate } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const RestrictedRoute = ({ redirectTo, component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
