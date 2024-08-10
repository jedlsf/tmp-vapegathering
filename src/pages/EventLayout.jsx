import React from 'react';
import styled from 'styled-components';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme.js';
import { eLayoutImage } from '../assets-imported/assets.js';
import Zoom from 'react-medium-image-zoom';

const MainContainer = styled.div`
  padding: 20px;
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  overflow: auto;
  
`;

const BodyContainer = styled.div`
  width: auto;
  max-width: 1400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  gap: 15px;
  box-sizing: border-box;
  height: auto; /* Allow height to adjust based on content */
  border-radius: 15px;
  opacity: 0.97;
  
`;



const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;


const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
   width: 100%;
  max-width: 1400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: auto;

`;

const PlaceholderImage = styled.img`
width: 100%;
height: auto;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 15px;

`;

const path3 = "M 300 0 Q 500 1100 1000 950 C 1900 400 0 200 1900 250 ";

function EventLayout() {
  return (
    <MainContainer>
      <BgOverlay>
        <AnimatedSplinePath
          path={path3}
          lineColor={theme.colors.brand.yellow}
          sWidth={155}
          speed={15}
          gColor1={theme.colors.brand.red}
          gColor2={theme.colors.brand.orange}
          gColor3={theme.colors.brand.yellow}
        />
      </BgOverlay>
      <ContentContainer>
        <BodyContainer>
          <Zoom>
            <PlaceholderImage src={eLayoutImage} alt="Event Layout" />
          </Zoom>
        </BodyContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default EventLayout;
