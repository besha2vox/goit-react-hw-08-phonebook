import { useState } from 'react';

export const useAlertMessage = () => {
  const [isAlertShow, setIsAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showAlertMessage = message => {
    setErrorMessage(message);
    setIsAlertShow(true);
    setTimeout(() => {
      setIsAlertShow(false);
    }, 3000);
  };

  return {
    errorMessage,
    setErrorMessage,
    isAlertShow,
    setIsAlertShow,
    showAlertMessage,
  };
};
