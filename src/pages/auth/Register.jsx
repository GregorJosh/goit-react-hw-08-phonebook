import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import RegisterForm from 'components/auth/RegisterForm';
import { StyledDiv } from './StyledDiv.styled';

const Register = () => {
  return (
    <StyledDiv>
      <Helmet>
        <title>Phonebook - Register</title>
      </Helmet>
      <h2 className="heading">Create Your Account</h2>
      <RegisterForm />
      <p>
        Do you have an account?{' '}
        <Link className="link" to="/">
          Log In...
        </Link>
      </p>
    </StyledDiv>
  );
};

export default Register;
