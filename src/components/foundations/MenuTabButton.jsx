import React from 'react';
import styled from 'styled-components';

// Styled components
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px; /* Adjust padding as needed */
  width: 100%;
  height: 50px; /* Fixed height */
  border-bottom: ${({ selected, theme }) => (selected ? `3px solid ${theme.colors.primary}` : 'none')};
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: border-bottom 0.1s ease;

  &:hover {
    opacity: 0.8; /* Optional: add a hover effect */
  }
`;


const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary}; /* Icon color */
  margin-right: 15px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary}; /* Text color */
  padding-bottom: 3px;
`;

const MenuTabButton = ({ icon: IconComponent, text, selected }) => {
  return (
    <ButtonContainer selected={selected}>
      <IconWrapper>
        {IconComponent}
      </IconWrapper>
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

export default MenuTabButton;
