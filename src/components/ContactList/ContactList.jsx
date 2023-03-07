import {
  ContactsList,
  ContactsLink,
  ContactsItem,
  ContactsCount,
} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <>
      <ContactsList>
        {contacts.map(({ name, id }) => (
          <ContactsItem key={id}>
            <ContactsLink to={`/contact/${id}`}>{name}</ContactsLink>
          </ContactsItem>
        ))}
      </ContactsList>
      <ContactsCount>
        {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
      </ContactsCount>
    </>
  );
};

export default ContactList;
