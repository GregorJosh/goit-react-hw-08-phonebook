import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormField from 'components/FormField';
import Input from 'components/Input';
import Button from 'components/Button';
import { createUser } from 'redux/auth/operations';

import { StyledForm } from './StyledForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onInput = ({ name, newValue }) => {
    const newFormData = {
      [name]: newValue,
    };

    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = event => {
    event.preventDefault();

    const form = event.target;

    dispatch(createUser(formData));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField label="Name" vertical>
        <Input name="name" value={name} onChange={onInput} />
      </FormField>
      <FormField label="Email" vertical>
        <Input
          name="email"
          type="email"
          pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
          title="Only valid email string"
          value={email}
          onChange={onInput}
        />
      </FormField>
      <FormField label="Password" vertical>
        <Input
          name="password"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$"
          title="Password must have at least one lowercase letter, one uppercase letter, 
          one digit and must be at least 8 characters long."
          value={password}
          onChange={onInput}
        />
      </FormField>
      <Button className="button">Register</Button>
    </StyledForm>
  );
};

export default RegisterForm;
