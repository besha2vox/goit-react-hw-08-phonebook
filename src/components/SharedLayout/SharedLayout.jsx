import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PhoneFrame, Content } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <PhoneFrame>
      <Content>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
    </PhoneFrame>
  );
};

export default SharedLayout;
