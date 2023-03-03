import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneFrame, Content } from './SharedLayout.styled';
import { Header, Navigation } from 'components';

const SharedLayout = () => {
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
