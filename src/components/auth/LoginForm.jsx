import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormField from 'components/FormField/FormField';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { loginUser } from 'redux/auth/operations';

import { StyledForm } from './StyledForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onInput = ({ name, newValue }) => {
    const newFormData = {
      [name]: newValue,
    };

    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = event => {
    event.preventDefault();

    const form = event.target;

    dispatch(loginUser(formData));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField label="Email" vertical>
        <Input
          name="email"
          value={email}
          pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
          title="Only valid email string"
          onChange={onInput}
        />
      </FormField>
      <FormField label="Password" vertical>
        <Input
          name="password"
          type="password"
          value={password}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$"
          title="Password must have at least one lowercase letter, one uppercase letter, 
          one digit and must be at least 8 characters long."
          onChange={onInput}
        />
      </FormField>
      <Button className="button">Log In</Button>
    </StyledForm>
  );
};

export default LoginForm;
