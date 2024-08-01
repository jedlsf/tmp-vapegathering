import React from 'react';
import styled from 'styled-components';
import { logoVG } from '../../assets-imported/assets';

const FooterContainer = styled.footer`
  width: 100%;

  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.hint}; // Set hint font size
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 80;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 25px; // Adjust the size as needed
  margin: 10px;
`;

const TextContainer = styled.div`
  text-align: center;
  flex: 1; // This will make the text container take the remaining space
  padding: 0 20px; // Optional: add some padding for better spacing
`;

function Footer() {
    return (
        <FooterContainer>
            <Logo src={logoVG} alt="Logo" />
            <TextContainer>
                The sale or distribution of Vaporized Nicotine and Non-Nicotine Products to or by persons below eighteen (18) years of age is illegal.
                <br />
                These products are harmful and contain nicotine which is a highly addictive substance. It is not recommended for use by nonsmokers.
            </TextContainer>
            <Logo src={logoVG} alt="Logo" />
        </FooterContainer>
    );
}

export default Footer;
