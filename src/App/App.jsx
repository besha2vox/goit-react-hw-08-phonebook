import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout, ContentLayout } from 'components';

const App = () => {
  const ContactsPage = lazy(() => import('pages/ContactsPage'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<ContentLayout />}>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
