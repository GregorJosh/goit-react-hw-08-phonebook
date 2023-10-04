import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from 'components/Container';

const StyledHeading = styled.h2`
  font-weight: 600;
`;

const Section = ({ className, title, children }) => {
  return (
    <section className={className}>
      <Container>
        {title && <StyledHeading>{title}</StyledHeading>}
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
