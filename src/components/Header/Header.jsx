import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { capitalizeFirstLetter } from 'servises/capitalizeFirstLetter';
import { HeaderLayout, Title } from './Header.styled';
import { Button } from 'shared';
import { FormContext } from 'servises/Context';

const Header = () => {
  const { formType, setFormType } = useContext(FormContext);
  const [buttonText, setButtonText] = useState('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/contacts' && !formType) {
      setButtonText('Add');
      return;
    }
    if (pathname.includes('/contact/') && !formType) {
      setButtonText('Edit');
      return;
    }
    setButtonText('');
  }, [formType, pathname]);

  const openForm = ({ target }) => {
    setFormType(target.textContent);
  };

  const closeForm = () => {
    setFormType('');
  };

  const title =
    pathname === '/'
      ? 'Phonebook'
      : capitalizeFirstLetter(pathname.split('/')[1]);

  return (
    <HeaderLayout>
      <Title>{title}</Title>
      {!!formType && <Button text="Close" onButtonClick={closeForm} />}
      {!!buttonText && !formType && (
        <Button text={buttonText} onButtonClick={openForm} />
      )}
    </HeaderLayout>
  );
};

export default Header;
