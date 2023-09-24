import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from 'components/Container';

const StyledHeading = styled.h2`
  font-weight: 600;
`;

const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <StyledHeading>{title}</StyledHeading>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
