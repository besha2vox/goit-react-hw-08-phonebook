import styled from 'styled-components';

export const ButtonLayout = styled.button`
  width: fit-content;
  border-radius: 50px;
  padding: 4px 8px;
  color: inherit;
  background-color: inherit;
  font-size: 14px;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #444444;
  }
`;
