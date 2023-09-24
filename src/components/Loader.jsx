import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

import Container from 'components/Container';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <StyledDiv>
        <Bars color="#000" />
      </StyledDiv>
    </Container>
  );
};

export default Loader;
