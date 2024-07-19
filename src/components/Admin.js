import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';

const Section = styled.div`
  margin-bottom: 3em;
`;

const Admin = () => {
  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Admin Dashboard</h2>
        <p>Manage your site content from the admin dashboard. Here you can add, edit, and delete content, manage users, and view analytics.</p>
        {/* Add admin dashboard details here */}
      </Section>
    </PageContainer>
  );
};

export default Admin;
