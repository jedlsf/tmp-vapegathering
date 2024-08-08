import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  pointer-events: none; // Prevent interaction with the overlay
  transition: opacity 0.3s ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  clip-path: ${({ isVisible, cursorPosition }) =>
    isVisible ? `circle(120px at ${cursorPosition.x}px ${cursorPosition.y}px)` : `circle(0px at ${cursorPosition.x}px ${cursorPosition.y}px)`};
  transition: clip-path 0.15s ease-in, transform 0.3s ease-in;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
  transform-origin: ${({ cursorPosition }) => cursorPosition ? `${cursorPosition.x}px ${cursorPosition.y}px` : 'center center'};
  opacity: 0.07;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondaryBackground};
    clip-path: ${({ isVisible, cursorPosition }) =>
    isVisible ? `circle(120px at ${cursorPosition.x}px ${cursorPosition.y}px)` : `circle(0px at ${cursorPosition.x}px ${cursorPosition.y}px)`};
    filter: blur(100px);
    transition: clip-path 0.5s ease-in, transform 0.5s ease-in;
    transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
    transform-origin: ${({ cursorPosition }) => cursorPosition ? `${cursorPosition.x}px ${cursorPosition.y}px` : 'center center'};
    z-index: -1;
    border-radius: 30%; // Ensures the before element is circular
    box-shadow: 0 0 150px rgba(0, 0, 0, 0.3); // Adds a soft shadow around the circle
  }
`;

const VFXCircleMask = ({ isVisible, cursorPosition }) => {
  return (
    <OverlayContainer isVisible={isVisible}>
      <Overlay isVisible={isVisible} cursorPosition={cursorPosition} />
    </OverlayContainer>
  );
};

export default VFXCircleMask;
