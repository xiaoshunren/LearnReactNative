import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2em;
  background: #333;
  color: #fff;
`;

const TechCard = styled(motion.div)`
  background: #444;
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
`;

const TechStack = () => {
  const techList = [
    { name: 'React', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    { name: 'GraphQL', description: 'A query language for your API.' },
  ];

  return (
    <Container>
      <h1>Our Tech Stack</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {techList.map((tech, index) => (
          <TechCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
          </TechCard>
        ))}
      </div>
    </Container>
  );
};

export default TechStack;
