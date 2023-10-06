import { styled, css } from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  align-items: center;

  ${({ $vertical }) =>
    $vertical &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;
