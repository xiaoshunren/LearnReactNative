import React, { useState } from 'react';
import styled from 'styled-components';

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

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <FormTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  );
};

export default FeedbackForm;
