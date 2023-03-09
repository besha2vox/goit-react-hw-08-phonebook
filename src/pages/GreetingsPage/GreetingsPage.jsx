import {
  SingLink,
  GreeringsWrapper,
  GreeringsTitle,
  GreeringsMain,
  GreeringsList,
} from './GreetingsPage.styled';

const GreetingsPage = () => {
  return (
    <GreeringsMain>
      <GreeringsWrapper>
        <GreeringsTitle>Greetings in my application.</GreeringsTitle>
        <p>Sign up or log in to your account.</p>
        <GreeringsList>
          <li>
            <SingLink to="/log-in">Log in</SingLink>
          </li>
          <li>
            <SingLink to="/sign-up">Sign up</SingLink>
          </li>
        </GreeringsList>
      </GreeringsWrapper>
    </GreeringsMain>
  );
};

export default GreetingsPage;
