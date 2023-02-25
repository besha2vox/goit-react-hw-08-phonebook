import {
  FooterLayout,
  FooterList,
  FooterItem,
  NavigateLink,
} from './Footer.styled';

const Footer = ({ footerText }) => {
  return (
    <FooterLayout>
      <nav>
        <FooterList>
          {footerText.map(text => (
            <FooterItem>
              <NavigateLink to={`/${text.toLowerCase()}`}>{text}</NavigateLink>
            </FooterItem>
          ))}
        </FooterList>
      </nav>
    </FooterLayout>
  );
};

export default Footer;
