import styled from 'styled-components';

export const SearchForm = styled.form`
  position: fixed;
  z-index: 1;
  top: 53px;
  left: 0;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #444444;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 30px;
  font-size: 18px;
  background-color: inherit;
  color: inherit;
  border: 1px solid #aaaaaa;
  padding: 4px 12px;
  transition: border-color 300ms ease-in-out;

  &:hover,
  &:focus {
    border-color: #ffffff;
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  right: 15px;
  top: calc(50% + 1px);
  transform: translateY(-50%);
  padding: 0;
  outline: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 30px;
    height: 30px;
    fill: #aaaaaa;
    transition: fill 300ms ease-in-out;
  }

  &:hover svg {
    fill: #ffffff;
  }
`;
