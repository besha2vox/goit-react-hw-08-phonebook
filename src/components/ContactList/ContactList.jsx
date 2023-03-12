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

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filterContacts = () => {
    const regex = /\d+/;
    if (regex.test(filter)) {
      return sortedContacts.filter(({ number }) => number.includes(filter));
    }
    return sortedContacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = filterContacts();

  if (isFetching && !contacts.length) return <EmptyContactList />;

  return (
    <ContactListWrapper>
      <ContactsList>
        {filteredContacts.map(({ name, id }) => (
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
