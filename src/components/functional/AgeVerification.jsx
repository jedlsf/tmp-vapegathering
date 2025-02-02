// AgeVerification.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ProceedButton } from '../../styles/global';
import { logoVGcropped, logoPCEIA, logo18p } from '../../assets-imported/assets';




const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
   background: linear-gradient(
    45deg, 
    ${({ theme }) => theme.colors.primaryBackground},
    ${({ theme }) => theme.colors.secondaryBackground}, 
    ${({ theme }) => theme.colors.brand.red},
    ${({ theme }) => theme.colors.brand.blue},
    ${({ theme }) => theme.colors.brand.yellow},
    ${({ theme }) => theme.colors.brand.green},
    ${({ theme }) => theme.colors.brand.orange},
    ${({ theme }) => theme.colors.brand.pink}
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  backdrop-filter: blur(10px);
  background-blend-mode: overlay;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    backdrop-filter: blur(10px);
    border-radius: inherit;
    z-index: -2;
  }
`;



export const MainContainer = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: left;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  z-index: 15;
`;



const PopupContent = styled.div`
  display: flex;
  flex-direction: column;  
  background: transparent;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  gap: 25px;
  width: 35vw;
  align-items: center; /* Center children horizontally */

  
  @media (max-width: 768px) {
      width: 320px;
  }
`;

const Text = styled.div`
  user-select: none;
  font-size: 1.3em;
  font-weight: ${({ theme }) => theme.typography.weights.body};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Poppins-Regular';
   @media (max-width: 768px) {
        font-size: 1em;
  }
`;

const Logo = styled.img`
 margin-top: 30px;
position: relative;
  width:28em;
  user-select: none;
    @media (max-width: 768px) {
        width: 18em;
  }
`;

const WarningLogo = styled.img`
  width: 8em;
  user-select: none;
    @media (max-width: 768px) {
        width: 20em;
  }
`;

export const RowContainer = styled.main`
  margin-top: 50px;
  flex-grow: 1;
  width: 30vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const AgeVerification = ({ onVerify }) => {
  const handleVerify = (isAbove18) => {
    if (isAbove18) {
      localStorage.setItem('isAbove18', 'true');
    }
    onVerify(isAbove18);
  };

  return (
    <PopupContainer>
      <PopupContent>
        <Logo src={logoVGcropped} alt="logo" />
        <RowContainer>
          <WarningLogo src={logoPCEIA} alt="WarningLogo" />
          <WarningLogo src={logo18p} alt="WarningLogo" />
        </RowContainer>
        <Text>The events on this website are age-restricted and intended for adults of legal vaping age only.</Text>
        <ProceedButton onClick={() => handleVerify(true)}>Yes, I am 18 or older</ProceedButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default AgeVerification;
