import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import background from 'images/people.jpg';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: right;
  align-items: center;
  gap: 50px;

  background-image: url(${background});

  & > .content {
    background-color: white;
    box-shadow: -2px 0px 20px 3px #0000006e;

    height: 100%;
    width: 50%;
    padding: 50px;
    gap: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <>
      <StyledDiv>
        <div className="content">
          <h1>Phonebook</h1>
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </div>
      </StyledDiv>
    </>
  );
};

export default Home;
