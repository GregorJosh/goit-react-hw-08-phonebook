import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  & > .heading {
    font-weight: 500;
  }

  & .link {
    color: var(--color-blue);

    &:hover {
      color: blue;
    }
  }
`;
