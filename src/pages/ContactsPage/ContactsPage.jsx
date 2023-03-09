import { FilterContext, FormContext } from 'servises/Context';
import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { SearchForm, ContactList, ContactForm, Loader } from 'components';
import { ContactsMain } from './ContactsPage.styled';

const ContactsPage = () => {
  const [filter, setFilter] = useState('');
  const { formType, setFormType } = useContext(FormContext);
  const isFormOpen = Boolean(formType);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    return () => setFormType(null);
  }, [setFormType]);
  if (isLoading) return <Loader />;

  return (
    <ContactsMain>
      {isFormOpen && <ContactForm />}
      <FilterContext.Provider value={{ filter, setFilter }}>
        <SearchForm />
        <ContactList />
      </FilterContext.Provider>
    </ContactsMain>
  );
};

export default ContactsPage;
