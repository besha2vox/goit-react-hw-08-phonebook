import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;

  & svg {
    width: 35px;
    height: 35px;
    fill: #aaaaaa;
    transition: transform 300ms ease-in-out, fill 300ms ease-in-out;
  }

  & svg:hover {
    fill: #ffffff;
    transform: scale(1.2);
  }
`;

export const RemoveBtn = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;

  & svg {
    width: 35px;
    height: 35px;
    fill: #aaaaaa;
    transition: transform 300ms ease-in-out, fill 300ms ease-in-out;
  }

  & svg:hover {
    fill: #fcacac;
    transform: scale(1.2);
  }
`;
