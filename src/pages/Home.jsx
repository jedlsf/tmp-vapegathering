import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer'
import ThreeDViewer from '../components/3d/ThreeDViewer'
import VFXCircleMask from '../components/vfx/VFXCircleMask'
import theme from '../theme.js';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ bgColor }) => bgColor}; // Apply the dynamic background color
  transition: background-color 0.5s ease-in-out; // Smooth transition for background color changes
  
`;


const targetDate = '2024-09-28T00:00:00Z';

function Home() {

    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 150 });
    const [backgroundColor, setBackgroundColor] = useState(theme.colors.primaryBackground); // Default background color
    const [revealedComponent, setRevealedComponent] = useState(null);

    const handleHovered = (index) => {
        console.log('Hovered', index);
        setHovered(true);
        if (index === 0) {
            changeBackgroundColor(theme.colors.brand.yellow);
        } else if (index === 1) {
            changeBackgroundColor(theme.colors.brand.orange);
        } else if (index === 2) {
            changeBackgroundColor(theme.colors.brand.green);
        } else if (index === 3) {
            changeBackgroundColor(theme.colors.brand.blue);

        } else {
            changeBackgroundColor(theme.colors.brand.red);
        }

    };

    const handleHoverEnd = (index) => {
        console.log('Hovered Out', index);
        setHovered(false);
        changeBackgroundColor(theme.colors.primaryBackground); // Example color on hover
    };

    const handleMouseMove = (event) => {
        setCursorPosition({
            x: event.clientX,
            y: event.clientY - 100,
        });
    };

    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    const revealComponent = (component) => {
        setRevealedComponent(component);
    };

    return (
        <Container onMouseMove={handleMouseMove} bgColor={backgroundColor}>
            <VFXCircleMask isVisible={hovered} cursorPosition={cursorPosition} />
            <ThreeDViewer
                isHovered={handleHovered}
                isHoverEnd={handleHoverEnd} // Corrected the prop name
            />
            <CountdownTimer
                targetDate={targetDate}
            />
        </Container>
    );
}

export default Home;
