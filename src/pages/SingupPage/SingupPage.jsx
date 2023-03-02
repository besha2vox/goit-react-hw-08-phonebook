import { RegisterForm } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SingupPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (isLogedIn) return <Navigate to="/contacts" replace />;

  return (
    <main>
      <RegisterForm />
    </main>
  );
};

export default SingupPage;
