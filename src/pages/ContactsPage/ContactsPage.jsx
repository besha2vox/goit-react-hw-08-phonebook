import { SearchForm, ContactList, EmptyContactList } from 'components';
import { ContactsMain } from './ContactsPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { FilterContext, FormContext } from 'servises/Context';
import { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { selectContactsCount } from 'redux/contacts/selectors';
import { ContactForm } from 'components';

const ContactsPage = () => {
  const [filter, setFilter] = useState('');
  const isLogedIn = useSelector(selectIsLoggedIn);
  const contactsCount = useSelector(selectContactsCount);
  const { formType, setFormType } = useContext(FormContext);
  const isFormOpen = Boolean(formType);

  useEffect(() => {
    return () => setFormType(null);
  }, [setFormType]);

  if (!isLogedIn) return <Navigate to="/" replace />;

  return (
    <ContactsMain>
      {isFormOpen && <ContactForm />}
      {contactsCount > 0 ? (
        <FilterContext.Provider value={{ filter, setFilter }}>
          <SearchForm />
          <ContactList />
        </FilterContext.Provider>
      ) : (
        <EmptyContactList />
      )}
    </ContactsMain>
  );
};

export default ContactsPage;
