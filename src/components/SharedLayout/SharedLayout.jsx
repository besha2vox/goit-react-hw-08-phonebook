import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneFrame, Content } from './SharedLayout.styled';
import { Header, Navigation } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { FormContext, CurrentContactContext } from 'servises/Context';
import { useState } from 'react';

const SharedLayout = () => {
  const [formType, setFormType] = useState(null);
  const [currentContact, setCurrentContact] = useState(null);
  const isLogedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogedIn) return;

    dispatch(fetchContacts());
  }, [dispatch, isLogedIn]);

  return (
    <PhoneFrame>
      <Content>
        <FormContext.Provider value={{ formType, setFormType }}>
          <Header />
          <main>
            <CurrentContactContext.Provider
              value={{ currentContact, setCurrentContact }}
            >
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </CurrentContactContext.Provider>
          </main>
        </FormContext.Provider>
        <Navigation />
      </Content>
    </PhoneFrame>
  );
};

export default SharedLayout;
