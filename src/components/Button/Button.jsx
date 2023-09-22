import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = props => {
  const { children: label, type, value } = props;

  const onClick = event => {
    if (props.onClick) {
      props.onClick(event.target.dataset.value);
    }
  };

  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      data-value={value}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
