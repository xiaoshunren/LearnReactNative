import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  padding: 2em;
  background: #0a0a0a;
  color: #fff;
  min-height: 100vh;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 50,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageContainer = ({ children }) => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
