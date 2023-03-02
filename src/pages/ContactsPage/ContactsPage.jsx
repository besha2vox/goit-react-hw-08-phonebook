import { SearchForm } from 'components';
import { ContactsMain } from './ContactsPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ContactsPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (!isLogedIn) return <Navigate to="/" replace />;

  return (
    <ContactsMain>
      <SearchForm />
    </ContactsMain>
  );
};

export default ContactsPage;
