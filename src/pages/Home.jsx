// Home.jsx

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer';
import ScrollBanner from '../components/functional/ScrollBanner';
import Block3D from '../components/3d/Block3D';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme';
import { imageHomeBanner, imageHomeScroller, eLayoutImage } from '../assets-imported/assets';

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
  height: 600px; /* Fixed height for the container */
  border-radius: ${({ theme }) => theme.borders.radius.large};
  display: flex;
  flex-direction: column; /* Ensure column layout */
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: 25px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageBanner = styled.img`
  width: 100%;
  height: auto; /* Ensure the image scales correctly */
  object-fit: contain;
  border-radius: 25px;
  overflow: hidden;
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

    const getImageSource = () => {
        // Return the appropriate image based on the current index
        switch (currentIndex) {
            case 0:
                return imageHomeBanner; // Default image for index 0
            case 1:
                return imageHomeBanner; // Add the URL for image 1 if available
            case 2:
                return eLayoutImage; // Add the URL for image 2 if available
            case 3:
                return imageHomeBanner; // Add the URL for image 3 if available
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
                        <CountdownTimer targetDate={targetDate} />
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
