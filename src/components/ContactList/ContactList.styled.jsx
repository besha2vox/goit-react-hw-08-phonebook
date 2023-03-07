import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: #444444;
    box-shadow: inset 0 0 6px rgba(37, 37, 37, 0.3);
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 12px;
  }
`;

export const ContactsList = styled.ul`
  width: 95%;
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
  margin-top: 8px;
  font-size: 18px;
  text-align: center;
  color: #747474;
`;
