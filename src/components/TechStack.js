import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';

const Section = styled.div`
  margin-bottom: 3em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const TechStack = () => {
  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Our Technology Stack</h2>
        <Grid>
          <Card>
            <h3 style={{ color: '#ff7f00' }}>Frontend</h3>
            <p style={{ color: '#aaa' }}>We use React, Redux, and other modern frontend technologies to build responsive and dynamic user interfaces.</p>
          </Card>
          <Card>
            <h3 style={{ color: '#ff7f00' }}>Backend</h3>
            <p style={{ color: '#aaa' }}>Our backend is powered by Node.js, Express, and MongoDB, ensuring robust and scalable server-side operations.</p>
          </Card>
          <Card>
            <h3 style={{ color: '#ff7f00' }}>DevOps</h3>
            <p style={{ color: '#aaa' }}>We leverage Docker, Kubernetes, and CI/CD pipelines to streamline our development and deployment processes.</p>
          </Card>
          <Card>
            <h3 style={{ color: '#ff7f00' }}>Cloud</h3>
            <p style={{ color: '#aaa' }}>Our solutions are hosted on AWS, providing high availability, security, and scalability.</p>
          </Card>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default TechStack;
