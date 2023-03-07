import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllContacts } from 'redux/contacts/selectors';
import {
  ProfileTitle,
  ProfileWrapper,
} from 'pages/ProfilePage/ProfilePage.styled';
import { ReactComponent as ProfileImage } from 'imgages/profile.svg';
import { FaSms, FaPhoneAlt } from 'react-icons/fa';
import { ButtonsWrapper } from './OneContactPage.styled';

const OneContactPage = () => {
  const { contactId } = useParams();
  const contacts = useSelector(selectAllContacts);
  const { name, number } = contacts.find(({ id }) => contactId === id);
  const handleLogoutClick = () => {};

  console.log(FaSms);

  return (
    <ProfileWrapper>
      <ProfileImage width="100" />
      <ProfileTitle>{name}</ProfileTitle>
      <p>{number}</p>
      <ButtonsWrapper>
        <a href={`tel:${number}`}>
          <FaPhoneAlt />
        </a>
        <a href={`sms:${number}`}>
          <FaSms />
        </a>
      </ButtonsWrapper>
    </ProfileWrapper>
  );
};

export default OneContactPage;
