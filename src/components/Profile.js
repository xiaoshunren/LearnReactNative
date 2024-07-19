import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';
import { UserContext } from '../UserContext';

const Section = styled.div`
  margin-bottom: 3em;
`;

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Your Profile</h2>
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user details here */}
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </Section>
    </PageContainer>
  );
};

export default Profile;
