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

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const Products = () => {
  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Our Products</h2>
        <Grid>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 1" />
            <h3 style={{ color: '#ff7f00' }}>Product 1</h3>
            <p style={{ color: '#aaa' }}>Product 1 is a state-of-the-art solution that offers unparalleled performance and reliability.</p>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 2" />
            <h3 style={{ color: '#ff7f00' }}>Product 2</h3>
            <p style={{ color: '#aaa' }}>Product 2 is designed to enhance your productivity and streamline your workflow.</p>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 3" />
            <h3 style={{ color: '#ff7f00' }}>Product 3</h3>
            <p style={{ color: '#aaa' }}>Product 3 offers cutting-edge features that are perfect for modern businesses.</p>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 4" />
            <h3 style={{ color: '#ff7f00' }}>Product 4</h3>
            <p style={{ color: '#aaa' }}>Product 4 is a reliable and efficient solution for your business needs.</p>
          </Card>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default Products;
