import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 1em;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Japan Hi-Think Corporation.</p>
    </FooterContainer>
  );
};

export default Footer;
