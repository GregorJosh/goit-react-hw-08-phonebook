import PropTypes from 'prop-types';

import styles from './Section.module.css';

import Container from 'components/Container/Container';

const Section = ({ title, children }) => {
  const { section, heading } = styles;

  return (
    <section className={section}>
      <Container>
        <h2 className={heading}>{title}</h2>
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
