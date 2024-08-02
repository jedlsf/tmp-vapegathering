import React from 'react';
import styled from 'styled-components';
import { logoPCEIA, logo18p } from '../../assets-imported/assets';

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.brand.blue};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  font-family: 'Akkordeon Four', sans-serif;
  font-size: ${({ theme }) => theme.typography.sizes.subject};
  letter-spacing: 0.1em; 
  align-items: center;
  justify-content: space-between;
  z-index: 80;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
padding: 10px;
margin-left: 20px;
margin-right: 20px;
margin-top: 5px;
  height: 45px; // Adjust the size as needed
   user-select: none;
`;

const TextContainer = styled.div`
 user-select: none;
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
