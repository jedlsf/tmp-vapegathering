import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.hint}; // Set hint font size
  text-align: center;
  z-index: 80;
`;

function Footer() {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} Request Events and Software Solutions, Inc. |  All rights reserved.
        </FooterContainer>
    );
}

export default Footer;
