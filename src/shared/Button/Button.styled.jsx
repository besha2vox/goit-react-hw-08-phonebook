import styled, { css } from 'styled-components';

export const button = css`
  margin-top: 8px;
  padding: 4px 8px;
  align-self: center;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out,
    outline 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #444444;
    outline: 1px solid #aaaaaa;
    color: inherit;
  }
`;

export const ButtonLayout = styled.button`
  ${button}
`;
