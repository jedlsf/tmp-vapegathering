import React from 'react';
import styled from 'styled-components';

// Styled components
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px; /* Adjust padding as needed */
  width: 100%;
  min-width: 120px;
  height: 50px; /* Fixed height */
  border-bottom: ${({ selected, theme }) => (selected ? `3px solid ${theme.colors.primary}` : 'none')};
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: border-bottom 0.1s ease;
  user-select: none;
  &:hover {

  }
`;


const IconWrapper = styled.div`
  color: ${({ iconColor }) => iconColor}; 
  margin-right: 15px;
  transition: color 0.3s ease;

  ${ButtonContainer}:hover & {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary}; 
  padding-bottom: 3px;
  transition: color 0.3s ease;

  ${ButtonContainer}:hover & {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const MenuTabButton = ({ icon: IconComponent, iconColor = "black", hoverColor = "black", text, selected }) => {
  return (
    <ButtonContainer selected={selected}>
      <IconWrapper iconColor={iconColor} hoverColor={hoverColor}>
        {IconComponent}
      </IconWrapper>
      <Text hoverColor={hoverColor}>{text}</Text>
    </ButtonContainer>
  );
};

export default MenuTabButton;
