// Home.jsx

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer';
import ScrollBanner from '../components/functional/ScrollBanner';
import Block3D from '../components/3d/Block3D';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme';
import { imageHomeBanner, imageHomeScroller, eLayoutImage, homeBanners } from '../assets-imported/assets';

const imagesHome = []; // Add any additional images here if needed

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  gap: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  max-height: ${({ mHeight }) => mHeight}px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const Stack3DContainer = styled.div`
  width: 150px;
  min-width: 150px;
  max-width: 300px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
      flex-direction: row;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 65vh; 
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  gap: 25px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ImageBanner = styled.img`
  width: 90%;
  height: auto; /* Ensure the image scales correctly */
  object-fit: contain;
  border-radius: 25px;
  overflow: hidden;
   @media (max-width: 768px) {
    width: 100%;
      border-radius: 12px;
  }
`;

const TimerOverlay = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: ${({ hide }) => (hide ? 'none' : 'block')};

  @media (max-width: 768px) {
    bottom: 05px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const PurchaseLink = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20%;
  transform: translateX(-50%);
  z-index: 4;
  display: ${({ hide }) => (hide ? 'none' : 'block')};

  @media (max-width: 768px) {
    bottom: 35%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Styled component for Proceed button
export const ProceedButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.yellow};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid transparent;
  padding: 10px 20px;
    font-family: 'Poppins-Semibold';
  width: 10em;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borders?.radius?.medium || '8px'};
  font-size: 1.6em;
  font-weight: ${({ theme }) => theme.typography.weights.title};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.blue};
     color: ${({ theme }) => theme.colors.brand.yellow};
     border-color: ${({ theme }) => theme.colors.brand.yellow};
  }

   @media (max-width: 768px) {
      width: 9em;
       font-size: 0.8em;
  }


`;

const path1 = 'M 350 1050 Q 0 500 200 300 Q 450 0 600 300 C 1050 1050 1900 150 1900 1000 A 50 50 0 1 1 1350 200 Q 1600 0 1800 400 Q 1850 700 1550 800 Q 550 1050 0 0 ';
const targetDate = '2024-09-16T00:00:00Z';

const meshPaths = [
  'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbVape0.glb',
  'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbCalendar.glb',
  'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbTicket.glb',
  'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbWorld.glb',
  'https://tmp-vg-appfiles.s3.ap-southeast-2.amazonaws.com/glb/glbQMark.glb',
];

function Home() {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHovered = (index) => {
    setHovered(true);
    setCurrentIndex(index);
    console.log("Hovered Index: ", index);
  };

  const handleHoverEnd = () => {
    setHovered(false);
    console.log("Hovered Out");
  };

  const handleClickTickets = (index) => {
    console.log("Clicked: ", index);
    window.location.href = "https://tickets.vapegathering.com";
  };

  const getImageSource = () => {
    // Return the appropriate image based on the current index
    switch (currentIndex) {
      case 0:
        return homeBanners[0]; // Default image for index 0
      case 1:
        return homeBanners[1]; // Add the URL for image 1 if available
      case 2:
        return eLayoutImage; // Add the URL for image 2 if available
      case 3:
        return homeBanners[2]; // Add the URL for image 3 if available
      default:
        return imageHomeBanner; // Default image for index 0
    }
  };

  return (
    <Container>
      <Background>
        <AnimatedSplinePath
          path={path1}
          gColor1={theme.colors.brand.red}
          gColor2={theme.colors.brand.orange}
          gColor3={theme.colors.brand.yellow}
          lineColor={theme.colors.brand.yellow}
          sWidth={155}
          speed={15}
        />
      </Background>
      <ColumnContainer>
        <DynaContainer>
          <ContentContainer>
            <ImageBanner src={getImageSource()} alt="Home Banner" />
            <TimerOverlay hide={currentIndex === 2}>
              <CountdownTimer targetDate={targetDate} />
            </TimerOverlay>
            <PurchaseLink hide={currentIndex !== 1}>
              <ProceedButton onClick={handleClickTickets}>Purchase</ProceedButton>
            </PurchaseLink>
          </ContentContainer>
          <Stack3DContainer>
            <Block3D
              onHovered={handleHovered}
              onHoverOut={handleHoverEnd}
              file={meshPaths[0]}
              speed={0.2}
              index={0}
              clamp={45}
              color={theme.colors.brand.red}
            />
            <Block3D
              onHovered={handleHovered}
              onHoverOut={handleHoverEnd}
              file={meshPaths[2]}
              speed={0.2}
              index={1}
              clamp={45}
              color={theme.colors.brand.blue}
              onClicked={handleClickTickets}
            />
            <Block3D
              onHovered={handleHovered}
              onHoverOut={handleHoverEnd}
              file={meshPaths[1]}
              speed={0.2}
              index={2}
              clamp={45}
              color={theme.colors.brand.yellow}
            />
            <Block3D
              onHovered={handleHovered}
              onHoverOut={handleHoverEnd}
              file={meshPaths[4]}
              speed={0.2}
              index={3}
              clamp={45}
              color={theme.colors.brand.orange}
            />
          </Stack3DContainer>
        </DynaContainer>
        <ScrollBanner imageUrl={imageHomeScroller} />
      </ColumnContainer>
    </Container>
  );
}

export default Home;
