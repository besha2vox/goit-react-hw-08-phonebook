import { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllContacts } from 'redux/contacts/selectors';
import {
  ProfileTitle,
  ProfileWrapper,
} from 'pages/ProfilePage/ProfilePage.styled';
import { ReactComponent as ProfileImage } from 'imgages/profile.svg';
import { FaSms, FaPhoneAlt, FaTrashAlt } from 'react-icons/fa';
import { ButtonsWrapper, RemoveBtn } from './OneContactPage.styled';
import { ContactForm, Modal } from 'components';
import { CurrentContactContext, FormContext } from 'servises/Context';

const OneContactPage = () => {
  const { currentContact, setCurrentContact } = useContext(
    CurrentContactContext
  );
  const [isModalShow, setIsModalShow] = useState(false);
  const { formType, setFormType } = useContext(FormContext);
  const { contactId } = useParams();
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    setCurrentContact(contacts.find(({ id }) => contactId === id));
    return () => setFormType(null);
  }, [contactId, contacts, setCurrentContact, setFormType]);

  const onModalOpen = () => {
    setIsModalShow(true);
  };

  const isFormOpen = Boolean(formType);

  return (
    <ProfileWrapper>
      {isFormOpen && <ContactForm />}
      <ProfileImage width="100" />
      {!!currentContact && (
        <>
          <ProfileTitle>{currentContact.name}</ProfileTitle>
          <p>{currentContact.number}</p>
          <ButtonsWrapper>
            <a href={`tel:${currentContact.number}`}>
              <FaPhoneAlt />
            </a>
            <a href={`sms:${currentContact.number}`}>
              <FaSms />
            </a>
          </ButtonsWrapper>
          <RemoveBtn type="button" onClick={onModalOpen}>
            <FaTrashAlt />
          </RemoveBtn>
        </>
      )}
      {isModalShow && <Modal setIsModalShow={setIsModalShow} id={contactId} />}
    </ProfileWrapper>
  );
};

export default OneContactPage;
