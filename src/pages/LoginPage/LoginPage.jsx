import { LoginForm } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (isLogedIn) return <Navigate to="/contacts" replace />;

  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
