import PropTypes from 'prop-types';

import { StyledErrorDiv, StyledInput } from './Input.styled';

const Input = props => {
  const {
    name,
    type = 'text',
    pattern = '[0-9a-zA-ZąęćśńłóżźĄĘĆŚŃŁÓŻŹ ]+',
    title = 'Only letters, space and digits',
    placeholder,
    value,
  } = props;

  const onChange = event => {
    const newValue = event.target.value;

    if (props.onChange) {
      props.onChange({ name: name, newValue: newValue });
    }
  };

  return (
    <>
      <StyledInput
        id={name}
        name={name}
        type={type}
        pattern={pattern}
        title={title}
        onChange={onChange}
        placeholder={placeholder || name}
        value={value}
        autoComplete="on"
        required
      />
      <StyledErrorDiv className="error">{title}</StyledErrorDiv>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Input;
