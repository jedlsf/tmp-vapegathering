import React from 'react';
import styled from 'styled-components';
import BentoBlock from '../components/foundations/BentoBlock';
import ImageSliderScroll from '../components/functional/ImageSliderScroll';
import theme from '../theme.js';
import { imageVenue, listSlidePastEvents } from '../assets-imported/assets.js';

const MainContainer = styled.div`
  padding: 20px;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  overflow: auto;
`;

const BodyContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  gap: 15px;
  box-sizing: border-box;
  height: auto; /* Allow height to adjust based on content */
  border-radius: 15px;
  opacity: 0.9;
`;

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const FullWidthBentoBlock = styled(BentoBlock)`
  width: 100%;  /* Ensure it takes the full width */
`;



function AboutUs() {
  return (
    <MainContainer>
      <BodyContainer>
        <DynaContainer>
          <ColumnContainer mHeight={550}>
            <BentoBlock
              textTitle="The Venue"
              fillColor={theme.colors.brand.red}
              rImage={imageVenue}
              mWidth={1190}
              mHeight={500}
              hoverText="The Tent - Las Pinas, Metro Manila"
              clickPath="https://maps.app.goo.gl/66CogTtAU41upNsG6"
            />

            <DynaContainer>
              <FullWidthBentoBlock
                textTitle="Our Team"
                fillColor={theme.colors.brand.yellow}
                rImage="path/to/your/another_image.jpg"
                mWidth={50000}
                mHeight={310}
              />
              <ColumnContainer mHeight={460}>
                <BentoBlock
                  textTitle="Mission"
                  fillColor={theme.colors.brand.blue}
                  rImage="path/to/your/another_image.jpg"
                  mWidth={400}
                  mHeight={150}
                  hoverText=" "
                />
                <BentoBlock
                  textTitle="Vision"
                  fillColor={theme.colors.brand.green}
                  rImage="path/to/your/another_image.jpg"
                  mWidth={400}
                  mHeight={150}
                  hoverText=" "
                />
              </ColumnContainer>
            </DynaContainer>
          </ColumnContainer>
          <BentoBlock
            textTitle="Past Events"
            fillColor={theme.colors.brand.orange}
            rType="component"
            mWidth={500}
            mHeight={550}
          >
            <ImageSliderScroll
              listImages={listSlidePastEvents}
            />
          </BentoBlock>
        </DynaContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default AboutUs;
