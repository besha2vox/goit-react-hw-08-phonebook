import {} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul>
      {contacts.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export default ContactList;
