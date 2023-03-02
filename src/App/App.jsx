import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { SharedLayout } from 'components';
import { LoginPage, SingupPage, GreetingsPage } from 'pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const ContactsPage = lazy(() => import('pages/ContactsPage'));
  const ProfilePage = lazy(() => import('pages/ProfilePage'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<GreetingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingupPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
