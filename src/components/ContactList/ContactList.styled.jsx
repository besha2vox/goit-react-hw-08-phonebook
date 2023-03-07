import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactsList = styled.ul`
  width: 100%;
  overflow-y: auto;
`;

export const ContactsItem = styled.li`
  width: 100%;
  border-bottom: 1px solid #aaaaaa;
`;

export const ContactsLink = styled(Link)`
  display: block;
  padding: 4px;
  font-size: 20px;
  color: inherit;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #575757f0;
  }
`;

export const ContactsCount = styled.p`
  font-size: 18px;
  text-align: center;
  color: #747474;
`;
