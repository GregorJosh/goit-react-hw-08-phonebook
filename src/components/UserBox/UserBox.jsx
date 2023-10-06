import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from 'redux/auth/operations';
import avatar from 'images/simple-avatar.png';
import useAuth from 'hooks/useAuth';

import { UserBoxDiv } from './UserBox.styled';

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
