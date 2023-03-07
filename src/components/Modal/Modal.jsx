import { Backdrop, ModalWindow, ModalBtnWrapper } from './Modal.styled';
import { Button } from 'shared';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';
import { useNavigate } from 'react-router-dom';

const Modal = ({ setIsModalShow, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onModalClose = () => {
    setIsModalShow(false);
  };

  const onRemoveContact = () => {
    dispatch(removeContact(id));
    onModalClose();
    navigate('/contacts', { replace: true });
  };

  return (
    <Backdrop>
      <ModalWindow>
        <p>Do you want remove this contact?</p>
        <ModalBtnWrapper>
          <Button text="No" onButtonClick={onModalClose} />
          <Button text="Yes" onButtonClick={onRemoveContact} />
        </ModalBtnWrapper>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
