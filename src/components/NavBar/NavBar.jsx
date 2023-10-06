import UserBox from '../UserBox/UserBox';

import { Header, NavBarContainer } from './NavBar.styled';

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
