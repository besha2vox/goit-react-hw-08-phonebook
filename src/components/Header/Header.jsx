import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from 'servises/capitalizeFirstLetter';
import { HeaderLayout, Title } from './Header.styled';
import { Button } from 'shared';

const Header = () => {
  const [buttonText, setButtonText] = useState('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/contacts') {
      setButtonText('Add');
    }
    if (pathname.includes('/contact/')) {
      setButtonText('Edit');
    }
  }, [pathname]);

  const title =
    pathname === '/'
      ? 'Phonebook'
      : capitalizeFirstLetter(pathname.split('/')[1]);

  return (
    <HeaderLayout>
      <Title>{title}</Title>
      {!!buttonText && <Button text={buttonText} />}
    </HeaderLayout>
  );
};

export default Header;
