import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2em;
  background: #f9f9f9;
  color: #333;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <Form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
};

export default Contact;
