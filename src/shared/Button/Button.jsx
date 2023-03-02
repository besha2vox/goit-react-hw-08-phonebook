import { ButtonLayout } from './Button.styled';

const Button = ({ text, onButtonClick }) => {
  return <ButtonLayout onClick={onButtonClick}>{text}</ButtonLayout>;
};

export default Button;
