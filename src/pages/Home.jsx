import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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

const CenteredRevealedComponent = styled.div`
  position: absolute;
  width: 330px;
  height: 210px;
  top: 40%;
  left: 50%;
  border-radius: 15px;
 
  transform: translate(-50%, -50%);
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
  background-size: 200% 200%;
  filter: 
  animation: ${gradientAnimation} 4s ease infinite;
  background-blend-mode: overlay;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; /* Show/hide based on hover state */
  z-index: 10; /* Ensure it is on top of other content */
  pointer-events: none; /* Allow mouse events to pass through */
  overflow: hidden;
`;

const TextContent = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;

  backdrop-filter: blur(45px);
  box-shadow: inset 0px 3px 7px rgba(0, 0, 0, 0.4);
`;

const path1 = 'M 0 0 Q 600 100 250 200 Q 0 250 150 550 Q 400 850 850 700 Q 1300 500 1200 300 Q 1000 50 1550 50 Q 1900 50 1700 650 Q 1500 1050 1050 1050 ';
const path2 = 'M 0 600 Q 500 1100 1250 850 C 1800 550 650 300 1900 0 ';
const path3 = "M 300 0 Q 500 1100 1000 950 C 1900 400 0 200 1900 250 ";
const path4 = "M 0 50 Q 0 500 200 300 Q 450 0 550 350 C 700 800 500 1100 1000 950 C 1650 450 600 400 1150 100 A 50 50 0 1 1 1750 1050 ";
const path5 = "M 350 1050 Q 0 500 200 300 Q 450 0 600 300 C 1050 1050 1900 150 1900 1000 A 50 50 0 1 1 1300 0 ";
const targetDate = '2024-09-16T00:00:00Z';

const textContentArray = [
    'Presented by TMP Productions, Inc.',
    'September 28, 2024',
    'Available Soon',
    'The Tent - Las Pinas, Metro Manila',
    'The Vape Gathering is where the vape community meets and has fun; a social gathering and forum where we recognize the legitimacy of the vape industry. Here, the community can see new products, meet the brands, get exclusive insights, and connect with people who share the same enthusiasm towards vaping.',
];

function Home() {
    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 150 });
    const [backgroundColor, setBackgroundColor] = useState(theme.colors.primaryBackground);
    const [revealedComponent, setRevealedComponent] = useState(null);
    const [centeredComponentVisible, setCenteredComponentVisible] = useState(false);
    const [centeredText, setCenteredText] = useState('');

    const handleHovered = (index) => {
        setHovered(true);
        setCenteredText(textContentArray[index] || textContentArray[4]);
        setCenteredComponentVisible(true);
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
                path={path4}
                gColor1={theme.colors.brand.green}
                gColor3="#0063bc"
                gColor2={theme.colors.brand.blue}
                lineColor={theme.colors.brand.green}
                sWidth={155}
                speed={15}
            />);
        } else {
            revealComponent(<AnimatedSplinePath
                path={path5}
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
        setCenteredComponentVisible(false);
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
            <CenteredRevealedComponent isVisible={centeredComponentVisible}>

                <TextContent>{centeredText}</TextContent>
            </CenteredRevealedComponent>
            <CountdownTimer targetDate={targetDate} />
        </Container>
    );
}

export default Home;
