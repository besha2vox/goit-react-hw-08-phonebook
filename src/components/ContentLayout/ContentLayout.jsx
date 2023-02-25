import { Header, Footer } from 'components';
import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from 'servises/capitalizeFirstLetter';

const ContenrLayout = () => {
  const footerText = ['Contacts', 'Profile'];
  const { pathname } = useLocation();
  const title = capitalizeFirstLetter(pathname.substring(1));

  return (
    <>
      <Header title={title} buttonText="Add" />
      <Footer footerText={footerText} />
    </>
  );
};

export default ContenrLayout;
