import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  FormContext,
  CurrentContactContext,
  FetchContactsContext,
} from 'servises/Context';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Navigation, Loader } from 'components';
import { PhoneFrame, Content } from './SharedLayout.styled';

const SharedLayout = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [formType, setFormType] = useState(null);
  const [currentContact, setCurrentContact] = useState(null);
  const isLogedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogedIn) return;

    const fetch = async () => {
      const { type } = await dispatch(fetchContacts());
      if (type === 'contacts/fetchContacts/fulfilled') {
        setIsFetching(true);
      }
    };

    fetch();
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
              <Suspense fallback={<Loader />}>
                <FetchContactsContext.Provider value={{ isFetching }}>
                  <Outlet />
                </FetchContactsContext.Provider>
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
