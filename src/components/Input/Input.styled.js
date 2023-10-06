import styled from 'styled-components';

export const StyledErrorDiv = styled.div`
  display: none;

  font-size: 0.8em;
  background-color: rgba(255, 198, 198, 0.188);
  color: red;
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;

  box-shadow: var(--def-box-shadow);
  border-radius: 4px;
  border: var(--def-border);

  font-weight: 500;

  &:active,
  &:focus {
    outline-style: ridge;
    outline-color: rgba(0, 0, 128, 0.208);
    outline-width: 2px;
  }

  &:valid {
    border-color: green;
    border-width: 2px;
  }

  &:invalid:focus {
    border-color: red;
    border-width: 3px;
  }

  &:invalid:focus + .error {
    display: block;
  }
`;
