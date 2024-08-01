// AgeVerification.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ProceedButton } from '../../styles/global';
import { logoVG } from '../../assets-imported/assets';


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
  align-items: center;
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
  background: ${({ theme }) => theme.colors.brand.red};
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  gap: 25px;
  width: 300px;
  align-items: center; /* Center children horizontally */
`;

const Text = styled.div`
  user-select: none;
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.body};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Logo = styled.img`
  width: 90px;
  user-select: none;
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
                <Logo src={logoVG} alt="logo" />
                <Text>The events on this website are age-restricted and intended for adults of legal vaping age only.</Text>
                <ProceedButton onClick={() => handleVerify(true)}>Yes, I am 18 or older</ProceedButton>
            </PopupContent>
        </PopupContainer>
    );
};

export default AgeVerification;
