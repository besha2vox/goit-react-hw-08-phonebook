import {
  ContactsList,
  ContactsLink,
  ContactsItem,
  ContactsCount,
  ContactListWrapper,
} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { FilterContext } from 'servises/Context';
import { useContext } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const { filter } = useContext(FilterContext);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ContactListWrapper>
      <ContactsList>
        {sortedContacts.map(({ name, id }) => (
          <ContactsItem key={id}>
            <ContactsLink to={`/contact/${id}`}>{name}</ContactsLink>
          </ContactsItem>
        ))}
      </ContactsList>
      <ContactsCount>
        {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
      </ContactsCount>
    </ContactListWrapper>
  );
};

export default ContactList;
