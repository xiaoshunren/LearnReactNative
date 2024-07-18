import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #1a1a1a, #333);
  color: #fff;
  text-align: center;
`;

const Heading = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const SubHeading = styled(motion.h2)`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const Home = () => {
  return (
    <Container>
      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Tech Company
      </Heading>
      <SubHeading
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Innovating the Future
      </SubHeading>
    </Container>
  );
};

export default Home;
