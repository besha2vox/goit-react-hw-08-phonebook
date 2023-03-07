import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneFrame, Content } from './SharedLayout.styled';
import { Header, Navigation } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const SharedLayout = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogedIn) return;

    dispatch(fetchContacts());
  }, [dispatch, isLogedIn]);

  return (
    <PhoneFrame>
      <Content>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <Navigation />
      </Content>
    </PhoneFrame>
  );
};

export default SharedLayout;
