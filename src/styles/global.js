import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  width: 100vw;

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
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;



// Styled component for Proceed button
export const ProceedButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid;
  padding: 10px 20px;
  width: 100%;
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