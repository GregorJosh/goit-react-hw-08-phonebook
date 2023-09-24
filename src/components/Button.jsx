import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 20px;

  cursor: pointer;
  background-color: white;
  box-shadow: var(--def-box-shadow);
  border-radius: 4px;
  border: var(--def-border);

  font-weight: 500;

  &:hover {
    background-color: rgb(244, 244, 244);
  }
`;

const Button = props => {
  const { children: label, type, value } = props;

  const onClick = event => {
    if (props.onClick) {
      props.onClick(event.target.dataset.value);
    }
  };

  return (
    <StyledButton type={type} onClick={onClick} data-value={value}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
