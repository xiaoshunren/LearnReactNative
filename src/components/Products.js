import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2em;
  background: #fff;
  color: #333;
`;

const ProductCard = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
`;

const Products = () => {
  const productList = [
    { name: 'Product 1', description: 'Description for product 1.' },
    { name: 'Product 2', description: 'Description for product 2.' },
    { name: 'Product 3', description: 'Description for product 3.' },
  ];

  return (
    <Container>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </div>
    </Container>
  );
};

export default Products;
