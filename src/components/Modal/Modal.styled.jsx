import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e2e2e88;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;
  width: 80%;
  background-color: #2e2e2e;
  border: 1px solid #aaaaaa;
  border-radius: 12px;
  text-align: center;
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
