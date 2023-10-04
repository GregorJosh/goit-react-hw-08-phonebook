import PropTypes from 'prop-types';
import { styled, css } from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  align-items: center;

  ${({ $vertical }) =>
    $vertical &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

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
