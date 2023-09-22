import { Bars } from 'react-loader-spinner';

import styles from './Loader.module.css';

import Container from 'components/Container/Container';

const Loader = () => {
  return (
    <Container>
      <div className={styles.loader}>
        <Bars color='#000'/>
      </div>
    </Container>
  );
};

export default Loader;
