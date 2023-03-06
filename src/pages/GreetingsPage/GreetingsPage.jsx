import {
  SingLink,
  GreeringsWrapper,
  GreeringsTitle,
  GreeringsMain,
  GreeringsList,
} from './GreetingsPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const GreetingsPage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  if (isLogedIn) return <Navigate to="/contacts" replace />;

  return (
    <GreeringsMain>
      <GreeringsWrapper>
        <GreeringsTitle>Greetings in my application.</GreeringsTitle>
        <p>Sign up or log in to your account.</p>
        <GreeringsList>
          <li>
            <SingLink to="/login">Log in</SingLink>
          </li>
          <li>
            <SingLink to="signup">Sign up</SingLink>
          </li>
        </GreeringsList>
      </GreeringsWrapper>
    </GreeringsMain>
  );
};

export default GreetingsPage;
