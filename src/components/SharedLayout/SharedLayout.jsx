import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneFrame, Content } from './SharedLayout.styled';
import { Header, Footer } from 'components';

const SharedLayout = () => {
  return (
    <PhoneFrame>
      <Content>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
      </Content>
    </PhoneFrame>
  );
};

export default SharedLayout;
