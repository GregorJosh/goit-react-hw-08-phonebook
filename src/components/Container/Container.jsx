import PropTypes from 'prop-types';

import { StyledDiv } from './Container.styled';

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
