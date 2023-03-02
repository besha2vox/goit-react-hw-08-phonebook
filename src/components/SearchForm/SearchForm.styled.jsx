import styled from 'styled-components';

export const SearchForm = styled.form`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #444444;
`;

export const SearchInput = styled.input`
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
