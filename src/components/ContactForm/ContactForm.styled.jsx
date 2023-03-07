import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
  position: fixed;
  padding: 20px;
  z-index: 2;
  top: 53px;
  left: 0;
  width: 100%;
  background-color: #444444;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid #aaaaaa;
  border-top: none;
  box-shadow: 0 2px 4px #242424;
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: fit-content;
  padding: 0;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;

  & svg {
    fill: #aaaaaa;
    width: 30px;
    height: 30px;
    transition: fill 300ms ease-in-out, transform 300ms ease-in-out;
  }

  &:hover svg {
    fill: #ffffff;
    transform: scale(1.2);
  }
`;
