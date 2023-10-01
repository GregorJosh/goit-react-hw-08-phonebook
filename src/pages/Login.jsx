import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import LoginForm from 'components/LoginFrom';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
