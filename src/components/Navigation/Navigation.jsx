import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  NavigationLayout,
  NavigationList,
  NavigationItem,
  NavigateLink,
} from './Navigation.styled';

const Navigation = () => {
  const [navLinksText, setnavLinksText] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (
      pathname.includes('profile') ||
      pathname.includes('contacts') | pathname.includes('contact/')
    ) {
      setnavLinksText(['Contacts', 'Profile']);
    }

    if (pathname.includes('log-in') || pathname.includes('sign-up')) {
      setnavLinksText(['Log-in', 'Sign-up']);
    }
  }, [pathname]);

  return (
    <NavigationLayout>
      <nav>
        <NavigationList>
          {navLinksText.map(text => (
            <NavigationItem key={text}>
              <NavigateLink to={`/${text.toLowerCase()}`}>{text}</NavigateLink>
            </NavigationItem>
          ))}
        </NavigationList>
      </nav>
    </NavigationLayout>
  );
};

export default Navigation;
