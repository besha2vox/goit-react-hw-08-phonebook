import styled from 'styled-components';

export const PhoneFrame = styled.div`
  max-width: 100%;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 85vh;
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    box-shadow: 5px 5px 10px 5px #2e2e2e;
    &::before {
      content: '';
      display: block;
      width: 60px;
      height: 5px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 10px;
    }
    &::after {
      content: '';
      display: block;
      width: 35px;
      height: 35px;
      position: absolute;
      left: 50%;
      bottom: -65px;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  padding-top: 54px;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #ffffff;
  text-shadow: 1px 1px 2px black;
  background-color: #424242;
`;
