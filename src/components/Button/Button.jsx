import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

const Button = props => {
  const { children: label, type, value, className } = props;

  const onClick = event => {
    if (props.onClick) {
      props.onClick(event.target.dataset.value);
    }
  };

  return (
    <StyledButton
      className={className}
      type={type}
      onClick={onClick}
      data-value={value}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
