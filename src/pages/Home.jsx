import React, { useState } from 'react';
import styled from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer';
import ThreeDViewer from '../components/3d/ThreeDViewer';
import VFXCircleMask from '../components/vfx/VFXCircleMask';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  transition: background-color 0.5s ease-in-out;
  position: relative; /* Ensure relative positioning for child absolute positioning */
    backdrop-filter: blur(5px);
`;

const RevealedComponentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; /* Show/hide based on hover state */
  z-index: 0; /* Ensure it is behind other content */
`;

const path1 = 'M 0 0 Q 600 100 250 200 Q 0 250 150 550 Q 400 850 850 700 Q 1300 500 1200 300 Q 1000 50 1550 50 Q 1900 50 1700 650 Q 1500 1050 1050 1050 ';
const path2 = 'M 0 600 Q 500 1100 1250 850 C 1800 550 650 300 1900 0 ';
const path3 = "M 300 0 Q 500 1100 1000 950 C 1900 400 0 200 1900 250 ";
const targetDate = '2024-09-28T00:00:00Z';

function Home() {
    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 150 });
    const [backgroundColor, setBackgroundColor] = useState(theme.colors.primaryBackground);
    const [revealedComponent, setRevealedComponent] = useState(null);

    const handleHovered = (index) => {
        setHovered(true);
        if (index === 0) {
            revealComponent(<AnimatedSplinePath
                path={path1}
                gColor1={theme.colors.brand.red}
                gColor2={theme.colors.brand.orange}
                gColor3={theme.colors.brand.yellow}
                lineColor={theme.colors.brand.yellow}
                sWidth={155}
                speed={15}
            />);
        } else if (index === 1) {
            revealComponent(<AnimatedSplinePath
                path={path2}
                gColor1={theme.colors.brand.orange}
                gColor2={theme.colors.brand.yellow}
                gColor3={theme.colors.brand.red}
                lineColor={theme.colors.brand.orange}
                sWidth={155}
                speed={15}
            />);
        } else if (index === 2) {
            revealComponent(<AnimatedSplinePath
                path={path3}
                gColor1={theme.colors.brand.blue}
                gColor3="#0063bc"
                gColor2={theme.colors.brand.yellow}
                lineColor={theme.colors.brand.yellow}
                sWidth={155}
                speed={15}
            />);
        } else if (index === 3) {
            revealComponent(<AnimatedSplinePath
                path={path1}
                gColor1={theme.colors.brand.green}
                gColor3="#0063bc"
                gColor2={theme.colors.brand.blue}
                lineColor={theme.colors.brand.green}
                sWidth={155}
                speed={15}
            />);
        } else {
            revealComponent(<AnimatedSplinePath
                path={path2}
                gColor1={theme.colors.brand.yellow}
                gColor3={theme.colors.brand.pink}
                gColor2={theme.colors.brand.red}
                lineColor={theme.colors.brand.pink}
                sWidth={155}
                speed={15}
            />);
        }
    };

    const handleHoverEnd = () => {
        setHovered(false);
        changeBackgroundColor(theme.colors.primaryBackground);
        setRevealedComponent(null);
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
            <RevealedComponentContainer isVisible={hovered}>
                {revealedComponent}
            </RevealedComponentContainer>
            <VFXCircleMask isVisible={hovered} cursorPosition={cursorPosition} />
            <ThreeDViewer
                isHovered={handleHovered}
                isHoverEnd={handleHoverEnd}
            />
            <CountdownTimer targetDate={targetDate} />
        </Container>
    );
}

export default Home;
