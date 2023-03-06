import { Button } from 'shared';
import { AlertWrapper } from './Alert.styled';

const Alert = ({ message, setIsVisible }) => {
  function handleClose() {
    setIsVisible(false);
  }

  return (
    <AlertWrapper>
      <p>{message}</p>
      <Button text="Close" onButtonClick={handleClose} />
    </AlertWrapper>
  );
};

export default Alert;
