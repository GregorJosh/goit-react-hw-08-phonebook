import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 20px;

  cursor: pointer;
  background-color: var(--color-blue);
  color: white;
  box-shadow: var(--def-box-shadow);
  border-radius: 4px;
  border: var(--def-border);
  font-weight: 500;

  &:hover {
    background-color: var(--color-blue-light);
  }
`;