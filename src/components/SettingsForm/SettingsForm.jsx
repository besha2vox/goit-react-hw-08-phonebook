import { ProfileForm } from './SettingsForm.styled';

const SettingsForm = () => {
  return (
    <ProfileForm>
      <label>
        Theme:{' '}
        <select name="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </ProfileForm>
  );
};

export default SettingsForm;
