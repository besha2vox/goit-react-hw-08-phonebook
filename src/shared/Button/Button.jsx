import { ButtonLayout } from './Button.styled';

const Button = ({ text, onButtonClick }) => {
  return (
    <ButtonLayout type="button" onClick={onButtonClick}>
      {text}
    </ButtonLayout>
  );
};

export default Button;
