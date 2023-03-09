import { ProfileTitle, ProfileWrapper } from './ProfilePage.styled';
import { ReactComponent as ProfileImage } from 'imgages/profile.svg';
import { Button } from 'shared';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);

  const handleLogoutClick = () => {
    dispatch(logOut());
  };

  return (
    <ProfileWrapper>
      <ProfileTitle>{name}</ProfileTitle>
      <ProfileImage width="100" />
      <p>{email}</p>
      <Button text="Log out" onButtonClick={handleLogoutClick} />
    </ProfileWrapper>
  );
};

export default ProfilePage;
