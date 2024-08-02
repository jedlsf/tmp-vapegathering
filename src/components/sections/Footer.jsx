import React from 'react';
import styled from 'styled-components';
import { logoPCEIA, logo18p } from '../../assets-imported/assets';

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.brand.blue};
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
padding: 10px;
  height: 45px; // Adjust the size as needed
`;

const TextContainer = styled.div`
  text-align: center;
    padding-top: 10px;
     padding-bottom: 10px;
  flex: 1; // This will make the text container take the remaining space
  
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo src={logoPCEIA} alt="Logo" />
      <TextContainer>
        The sale or distribution of Vaporized Nicotine and Non-Nicotine Products to or by persons below eighteen (18) years of age is illegal.
        <br />
        These products are harmful and contain nicotine which is a highly addictive substance. It is not recommended for use by nonsmokers.
      </TextContainer>
      <Logo src={logo18p} alt="Logo" />
    </FooterContainer>
  );
}

export default Footer;
