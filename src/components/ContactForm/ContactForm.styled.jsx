import styled from 'styled-components';

export const ContactFormBackdrop = styled.div`
  position: absolute;
  z-index: 2;
  top: -8px;
  left: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  background-color: #2e2e2e9b;
  background-image: linear-gradient(#2e2e2e 50%, #2e2e2e29);
`;

export const ContactFormWrapper = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #444444;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid #aaaaaa;
  border-top: none;
  box-shadow: 0 2px 4px #242424;
`;
