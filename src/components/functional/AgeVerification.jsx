// AgeVerification.jsx

import React from 'react';
import styled from 'styled-components';
import { ProceedButton } from '../../styles/global';
import { logoVG } from '../../assets-imported/assets';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;  
  background: ${({ theme }) => theme.colors.secondaryBackground};
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
  color: ${({ theme }) => theme.colors.primaryBackground};
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
