import PropTypes from 'prop-types';

import Container from 'components/Container/Container';

import { StyledHeading } from './Section.styled';

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
