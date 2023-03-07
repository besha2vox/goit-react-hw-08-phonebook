import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { capitalizeFirstLetter } from 'servises/capitalizeFirstLetter';
import { HeaderLayout, Title } from './Header.styled';
import { Button } from 'shared';
import { FormContext } from 'servises/Context';

const Header = () => {
  const { setFormType } = useContext(FormContext);
  const [buttonText, setButtonText] = useState('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/contacts') {
      setButtonText('Add');
      return;
    }
    if (pathname.includes('/contact/')) {
      setButtonText('Edit');
      return;
    }
    setButtonText('');
  }, [pathname]);

  const toggleForm = ({ target }) => {
    setFormType(target.textContent);
  };

  const title =
    pathname === '/'
      ? 'Phonebook'
      : capitalizeFirstLetter(pathname.split('/')[1]);

  return (
    <HeaderLayout>
      <Title>{title}</Title>
      {!!buttonText && <Button text={buttonText} onButtonClick={toggleForm} />}
    </HeaderLayout>
  );
};

export default Header;
