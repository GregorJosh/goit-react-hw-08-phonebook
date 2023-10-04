import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import LoginForm from 'components/auth/LoginForm';
import { StyledDiv } from './StyledDiv.styled';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook - Login</title>
      </Helmet>
      <StyledDiv>
        <h2 className="heading">Login To Your Account</h2>
        <LoginForm />
        <p>
          Don't have an account?{' '}
          <Link className="link" to="register">
            Sign In...
          </Link>
        </p>
      </StyledDiv>
    </>
  );
};

export default Login;
