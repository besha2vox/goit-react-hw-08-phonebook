import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { useContext } from 'react';
import { FilterContext, FetchContactsContext } from 'servises/Context';
import {
  ContactsList,
  ContactsLink,
  ContactsItem,
  ContactsCount,
  ContactListWrapper,
} from './ContactList.styled';
import { EmptyContactList } from 'components';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const { isFetching } = useContext(FetchContactsContext);
  const { filter } = useContext(FilterContext);

  const filterContacts = () => {
    const regex = /\d+/;
    if (regex.test(filter)) {
      return contacts.filter(({ number }) => number.includes(filter));
    }
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const filteredContacts = filterContacts();

  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  if (isFetching && !contacts.length) return <EmptyContactList />;

  return (
    <ContactListWrapper>
      <ContactsList>
        {sortedContacts.map(({ name, id }) => (
          <ContactsItem key={id}>
            <ContactsLink to={`/contact/${id}`}>{name}</ContactsLink>
          </ContactsItem>
        ))}
      </ContactsList>
      {!!contacts.length && (
        <ContactsCount>
          {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
        </ContactsCount>
      )}
    </ContactListWrapper>
  );
};

export default ContactList;
