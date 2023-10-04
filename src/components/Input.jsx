import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorDiv = styled.div`
  display: none;

  font-size: 0.8em;
  background-color: rgba(255, 198, 198, 0.188);
  color: red;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;

  box-shadow: var(--def-box-shadow);
  border-radius: 4px;
  border: var(--def-border);

  font-weight: 500;

  &:active,
  &:focus {
    outline-style: ridge;
    outline-color: rgba(0, 0, 128, 0.208);
    outline-width: 2px;
  }

  &:valid {
    border-color: green;
    border-width: 2px;
  }

  &:invalid:focus {
    border-color: red;
    border-width: 3px;
  }

  &:invalid:focus + .error {
    display: block;
  }
`;

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
