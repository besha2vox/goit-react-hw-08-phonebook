import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const NoFoundPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (isLogedIn) return <Navigate to="/contacts" />;
  return <Navigate to="/" />;
};

export default NoFoundPage;
