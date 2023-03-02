import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from 'servises/capitalizeFirstLetter';
import { HeaderLayout, Title } from './Header.styled';
import { Button } from 'shared';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const title =
    pathname === '/'
      ? 'Phonebook'
      : capitalizeFirstLetter(pathname.substring(1));
  const buttonText = pathname === '/contacts' ? 'Add' : '';

  return (
    <HeaderLayout>
      <Title>{title}</Title>
      {!!buttonText && <Button text={buttonText} />}
    </HeaderLayout>
  );
};

export default Header;
