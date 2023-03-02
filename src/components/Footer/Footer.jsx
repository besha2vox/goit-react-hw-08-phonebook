import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FooterLayout,
  FooterList,
  FooterItem,
  NavigateLink,
} from './Footer.styled';

const Footer = () => {
  const [navLinksText, setnavLinksText] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname.includes('profile') || pathname.includes('contacts')) {
      setnavLinksText(['Contacts', 'Profile']);
    }

    if (pathname.includes('login') || pathname.includes('signup')) {
      setnavLinksText(['Login', 'Singup']);
    }
  }, [pathname]);

  return (
    <FooterLayout>
      <nav>
        <FooterList>
          {navLinksText.map(text => (
            <FooterItem key={text}>
              <NavigateLink to={`/${text.toLowerCase()}`}>{text}</NavigateLink>
            </FooterItem>
          ))}
        </FooterList>
      </nav>
    </FooterLayout>
  );
};

export default Footer;
