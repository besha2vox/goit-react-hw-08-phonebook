import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin: 0 auto;
  width: fit-content;

  & svg {
    fill: #aaaaaa;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 24px;
`;
