import styled from 'styled-components';

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  & label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & select {
    background-color: inherit;
    color: inherit;
    outline: none;
    font-size: 16px;
  }

  & option {
    background-color: #424242;
  }

  & option:hover {
    background-color: #2e2e2e;
  }
`;
