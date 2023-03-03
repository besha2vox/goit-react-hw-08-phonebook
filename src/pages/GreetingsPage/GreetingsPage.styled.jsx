import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GreeringsMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const GreeringsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 10px;
`;

export const GreeringsTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const GreeringsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 50px;
  width: 100%;

  & li {
    width: 100%;
  }
`;

export const SingLink = styled(Link)`
  display: block;
  padding: 8px;
  margin: 0 auto;
  width: 50%;
  color: inherit;
  text-align: center;
  border: 1px solid #aaaaaa;
  border-radius: 50px;
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #2e2e2e;
  }
`;
