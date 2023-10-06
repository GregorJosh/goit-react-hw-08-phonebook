import styled from 'styled-components';

export const UserBoxDiv = styled.div`
  position: relative;

  & > .button {
    padding: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;

    & > .image {
      width: 30px;
    }
  }

  & > .list {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: absolute;
    right: 0;
    width: 100%;

    & > .item {
      width: 100%;

      & > button {
        width: 100%;
        padding: 0.5em;
      }
    }
  }
`;
