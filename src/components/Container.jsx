import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-width: 290px;
  max-width: 1200px;

  margin: 0px auto;
  padding: 20px 20px 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = ({ children, className }) => (
  <StyledDiv className={className}>{children}</StyledDiv>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

export default Container;
