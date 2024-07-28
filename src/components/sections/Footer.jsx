import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-size: ${({ theme }) => theme.typography.sizes.hint}; // Set hint font size
  text-align: center;
  z-index: 80;
`;

function Footer() {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} TMP Productions - Vape Gathering |  All rights reserved.
        </FooterContainer>
    );
}

export default Footer;
