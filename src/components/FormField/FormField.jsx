import PropTypes from 'prop-types';

import styles from './FormField.module.css';

const FormField = props => {
  const { label, vertical = false, children: input } = props;

  return (
    <div className={vertical ? styles.vertical : styles['form-field']}>
      <label htmlFor={input.props.name}>{label}</label>
      {input}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
};

export default FormField;
