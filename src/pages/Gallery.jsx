import React from 'react';
import styled from 'styled-components';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme.js';
import { listSlidePastEvents } from '../assets-imported/assets.js';
import PhotoGallery from '../components/functional/PhotoGallery.jsx';

const MainContainer = styled.div`
  padding: 20px;
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;
.hidden-scrollbar {
  overflow: auto; /* or overflow: scroll; */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.hidden-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
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
   width: 70vw;
   height: 65vh;
overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
 scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

.hidden-scrollbar {
  overflow: auto; /* or overflow: scroll; */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.hidden-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
 @media (max-width: 768px) {
     height: 80vh;
       box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0);
  }



`;


const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  gap: 25px;
`;

const PreHeader = styled.div`
  background-color: ${({ fill }) => fill};
width: 73%;
  border-radius: 10px;
  padding: 5px;
    box-shadow: inset 0px 4px 14px rgba(0, 0, 0, 0.3);
    align-items: center;

      @media (max-width: 768px) {
width: 100%;
  }
`;
const Title = styled.div`
  user-select: none;
  font-family: 'Akkordeon Seven', sans-serif;
  font-size: 6em;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const path3 = "M 300 0 Q 500 1100 1000 950 C 1900 400 0 200 1900 250 ";

function Gallery() {
    return (
        <MainContainer>
            <BgOverlay>
                <AnimatedSplinePath
                    path={path3}
                    lineColor={theme.colors.brand.orange}
                    sWidth={155}
                    speed={15}
                    gColor1={theme.colors.brand.green}
                    gColor2={theme.colors.brand.blue}
                    gColor3={theme.colors.brand.pink}
                />
            </BgOverlay>
            <ContentContainer>
                <PreHeader fill={theme.colors.brand.blue}>
                    <Title>Gallery</Title>
                </PreHeader>
                <PhotoGallery
                    listImages={listSlidePastEvents}
                    columns={3}
                    spacing={45}
                    orientation='square'
                />

            </ContentContainer>
        </MainContainer>
    );
}

export default Gallery;
