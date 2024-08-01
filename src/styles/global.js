import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  width: 100vw;
  font-family: 'Poppins', sans-serif;

`;

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

export const MainContainer = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: left;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  z-index: 15;
  width: 100vw;
  height: 100vh;
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



// Styled component for Proceed button
export const ProceedButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.green};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.brand.green};
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.title};
  filter: drop-shadow(${({ theme }) => theme.colors.brand.yellow} 0.4rem 0.4rem 0.9rem);

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.yellow};
     color: ${({ theme }) => theme.colors.brand.red};
     border-color: ${({ theme }) => theme.colors.brand.red};
     border: 1px solid;
      filter: drop-shadow(${({ theme }) => theme.colors.brand.orange} 0.3rem 0.3rem 0.7rem);
  }

   &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme.colors.disabledBorder};
    opacity: 0.6;
  }
`;

// Styled component for Utility button
export const UtilityButton = styled.button`
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.title};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
     color: ${({ theme }) => theme.colors.primary};
     border-color: ${({ theme }) => theme.colors.primary};
     border: 1px solid;
  }

   &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme.colors.disabledBorder};
    opacity: 0.6;
  }
`;



// Styled component for Utility button
export const SwitchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  font-weight: ${({ theme }) => theme.typography.weights.title};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
     color: ${({ theme }) => theme.colors.primary};
     border-color: ${({ theme }) => theme.colors.primary};
     border: 1px solid;
  }

   &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme.colors.disabledBorder};
    opacity: 0.6;
  }
`;