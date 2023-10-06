import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1200px) {
    max-width: 60%;
  }

  > .name {
    width: 30%;
  }

  > .phone {
    width: 30%;
    text-align: right;
  }
`;