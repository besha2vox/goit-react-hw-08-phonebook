import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { SharedLayout, PublicRoute, PrivateRoute } from 'components';

const GreetingsPage = lazy(() => import('pages/GreetingsPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const OneContactPage = lazy(() => import('pages/OneContactPage'));
const NoFoundPage = lazy(() => import('pages/NoFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<GreetingsPage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contact/:contactId" element={<OneContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NoFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
