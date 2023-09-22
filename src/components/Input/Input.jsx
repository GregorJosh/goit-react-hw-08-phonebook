import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = props => {
  const { name, type, pattern, title, placeholder, value } = props;
  const { input, error } = styles;

  const onChange = event => {
    const newValue = event.target.value;

    if (props.onChange) {
      props.onChange({ name: name, newValue: newValue });
    }
  };

  return (
    <>
      <input
        className={input}
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
      <div className={error}>{title}</div>
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
