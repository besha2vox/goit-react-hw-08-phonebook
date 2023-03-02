import { ProfileTitle, ProfileWrapper } from './ProfilePage.styled';
import { ReactComponent as ProfileImage } from 'imgages/profile.svg';
import { Button } from 'shared';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logOut());
  };

  return (
    <main>
      <ProfileWrapper>
        <ProfileTitle>My Profile</ProfileTitle>
        <ProfileImage width="100" />
        <p>my emeil</p>
        <Button text="Log out" onButtonClick={handleLogoutClick} />
      </ProfileWrapper>
    </main>
  );
};

export default ProfilePage;
