import FormField from './FormField';
import Input from './Input';

const LoginForm = () => {
  return (
    <form method="post">
      <FormField label="Name">
        <Input name="name" type="text" value="" />
      </FormField>
    </form>
  );
};

export default LoginForm;
