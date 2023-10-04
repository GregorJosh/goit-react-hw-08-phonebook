import styled from 'styled-components';

import Container from './Container';
import UserBox from './UserBox';

const Header = styled.header`
  padding-bottom: 20px;
`;

const NavBarContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const NavBar = () => {
  return (
    <Header>
      <NavBarContainer>
        <h1>Phonebook</h1>
        <UserBox />
      </NavBarContainer>
    </Header>
  );
};

export default NavBar;
