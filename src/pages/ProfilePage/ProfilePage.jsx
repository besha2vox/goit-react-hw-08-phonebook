import { ProfileTitle, ProfileWrapper } from './ProfilePage.styled';
import { ReactComponent as ProfileImage } from 'imgages/profile.svg';
import { Button } from 'shared';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);
  const isLogedIn = useSelector(selectIsLoggedIn);

  const handleLogoutClick = () => {
    dispatch(logOut());
  };

  if (!isLogedIn) return <Navigate to="/" replace />;

  return (
    <main>
      <ProfileWrapper>
        <ProfileTitle>{name}</ProfileTitle>
        <ProfileImage width="100" />
        <p>{email}</p>
        <Button text="Log out" onButtonClick={handleLogoutClick} />
      </ProfileWrapper>
    </main>
  );
};

export default ProfilePage;
