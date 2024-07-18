import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em;
  background: #f9f9f9;
  color: #333;
  text-align: center;
`;

const Contact = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
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
      </form>
    </Container>
  );
};

export default Contact;
