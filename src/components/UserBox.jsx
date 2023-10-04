import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logoutUser } from 'redux/auth/operations';
import avatar from 'images/simple-avatar.png';
import useAuth from 'hooks/useAuth';

const UserBoxDiv = styled.div`
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

const UserBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const closeMenu = useCallback(
    event => {
      if (
        event.target.nodeName !== 'SPAN' &&
        event.target.nodeName !== 'IMG' &&
        event.target.nodeName !== 'BUTTON' &&
        isOpen
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [closeMenu]);

  return (
    <UserBoxDiv $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <button className="button">
        <img className="image" src={avatar} alt="Simple human avatar" />
        <span>{user.email}</span>
      </button>
      <ul className="list">
        <li className="item">
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </li>
      </ul>
    </UserBoxDiv>
  );
};

export default UserBox;
