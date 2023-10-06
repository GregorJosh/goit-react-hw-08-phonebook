import PropTypes from 'prop-types';

import { StyledDiv } from './FormField.styled';

const FormField = ({ label, vertical = false, children: input }) => {
  return (
    <StyledDiv $vertical={vertical}>
      <label htmlFor={input.props.name}>{label}</label>
      {input}
    </StyledDiv>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
};

export default FormField;
