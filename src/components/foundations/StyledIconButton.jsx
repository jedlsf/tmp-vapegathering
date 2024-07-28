// StyledIconButton.js
import React from 'react';
import styled from 'styled-components';

// Define your styled button with default styles
const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 35px; // Adjust size as needed
  height: 35px; // Adjust size as needed
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary}; // Default icon color
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}; // Hover background color
    color: ${({ theme }) => theme.colors.primaryBackground}; // Hover icon color
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 15px; // Adjust icon size as needed
    height: 15px; // Adjust icon size as needed
    aspect-ratio: 1;
    color: currentColor; // Use currentColor to inherit the button's color
  }
`;

// IconButton component
const StyledIconButton = ({ icon: Icon, ...props }) => {
    return (
        <IconButton {...props}>
            <Icon />
        </IconButton>
    );
};

export default StyledIconButton;
