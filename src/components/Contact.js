import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';

const Section = styled.div`
  margin-bottom: 3em;
`;

const FormContainer = styled.div`
  background: #1a1a1a;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-top: 2em;
`;

const FormInput = styled.input`
  padding: 0.5em;
  width: 100%;
  margin-bottom: 1em;
  border: 1px solid #333;
  background: #0a0a0a;
  color: #fff;
`;

const FormTextarea = styled.textarea`
  padding: 0.5em;
  width: 100%;
  margin-bottom: 1em;
  border: 1px solid #333;
  background: #0a0a0a;
  color: #fff;
`;

const FormButton = styled.button`
  padding: 0.5em 1em;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Contact Us</h2>
        <p>DTCホームページをご利用いただきありがとうございます。お問い合わせは下記の入力フォームをご利用ください。</p>
        <FormContainer>
          <form>
            <FormInput type="text" placeholder="Your Name" required />
            <FormInput type="email" placeholder="Your Email" required />
            <FormTextarea placeholder="Your Message" rows="5" required />
            <FormButton type="submit">Submit</FormButton>
          </form>
        </FormContainer>
      </Section>
    </PageContainer>
  );
};

export default Contact;
