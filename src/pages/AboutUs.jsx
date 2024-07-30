import React from 'react';
import styled from 'styled-components';
import BentoBlock from '../components/foundations/BentoBlock';
import theme from '../theme.js';

const MainContainer = styled.div`
  padding: 20px; /* Global padding around the edges */
  width: 100vw;
  height: 100vh; /* Adjust to full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  box-sizing: border-box; /* Include padding in width/height calculation */
`;

const BodyContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Optional: set a max-width to control content width */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  gap: 25px;
  box-sizing: border-box; /* Include padding in width calculation */
  height: 80vh;
`;

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 15px; /* Padding around content */
  box-sizing: border-box; /* Include padding in width calculation */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  width: 20em;
  max-height: ${({ mHeight }) => mHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function AboutUs() {
    return (
        <MainContainer>
            <BodyContainer>
                <DynaContainer>
                    <BentoBlock
                        textTitle="Mission"
                        fillColor={theme.colors.brand.blue}
                        rImage="path/to/your/another_image.jpg"
                        mWidth={500}
                        mHeight={220}
                    />
                    <ColumnContainer mHeight={260}>
                        <BentoBlock
                            textTitle="Mission"
                            fillColor={theme.colors.brand.blue}
                            rImage="path/to/your/another_image.jpg"
                            mWidth={300}
                            mHeight={80}
                        />
                        <BentoBlock
                            textTitle="Vision"
                            fillColor={theme.colors.brand.green}
                            rImage="path/to/your/another_image.jpg"
                            mWidth={300}
                            mHeight={80}
                        />

                    </ColumnContainer>
                </DynaContainer>
            </BodyContainer>
        </MainContainer>
    );
}

export default AboutUs;
