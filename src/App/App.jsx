import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { SharedLayout } from 'components';

const GreetingsPage = lazy(() => import('pages/GreetingsPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const OneContactPage = lazy(() => import('pages/OneContactPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<GreetingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contact/:contactId" element={<OneContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
