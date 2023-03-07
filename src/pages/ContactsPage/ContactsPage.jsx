import { SearchForm, ContactList, EmptyContactList } from 'components';
import { ContactsMain } from './ContactsPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectContactsCount } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const contactsCount = useSelector(selectContactsCount);

  if (!isLogedIn) return <Navigate to="/" replace />;

  return (
    <ContactsMain>
      {contactsCount > 0 ? (
        <>
          <SearchForm />
          <ContactList />
        </>
      ) : (
        <EmptyContactList />
      )}
    </ContactsMain>
  );
};

export default ContactsPage;
