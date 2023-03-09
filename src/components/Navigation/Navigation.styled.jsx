import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLayout = styled.footer`
  position: fixed;
  z-index: 2;
  bottom: -1px;
  left: 0;
  width: 100%;
  background-color: #2e2e2e;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: #aaaaaa;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li`
  width: 50%;
`;

export const NavigateLink = styled(NavLink)`
  text-align: center;
  display: block;
  padding: 10px 0;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  border-top: 1px solid #aaaaaa;
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;

  &.active {
    background-color: #444444;
    border-top: none;
  }
`;
