import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components';
import { LoginPage, SingupPage, GreetingsPage } from 'pages';

const App = () => {
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
