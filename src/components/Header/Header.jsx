import { HeaderLayout } from './Header.styled';
import { Title, Button } from 'shared';

const Header = ({ title, buttonText }) => {
  return (
    <HeaderLayout>
      <Title title={title} />
      <Button text={buttonText} />
    </HeaderLayout>
  );
};

export default Header;
