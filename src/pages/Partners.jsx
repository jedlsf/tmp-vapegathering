import React from 'react';
import styled from 'styled-components';
import BentoBlock from '../components/foundations/BentoBlock';
import ContactInfo from '../components/foundations/ContactInfo';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme.js';
import { brandLogos, imageAwardsBanner, imageAwardsUnhovered1, imageAwardsUnhovered2 } from '../assets-imported/assets.js';
import Newsletter from '../components/functional/Newsletter.jsx';

const MainContainer = styled.div`
  padding: 30px;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  overflow: auto;

   @media (max-width: 768px) {
     overflow: auto;
      height: 95vh;
  }
`;


const BodyContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-left:15em;
    margin-right:15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent
  gap: 15px;
  box-sizing: border-box;

  border-radius: 15px;
  opacity: 1;
`;

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  max-height: ${({ mHeight }) => mHeight}vh; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.4em;


  @media (max-width: 768px) {
    max-height: 100%; 
      align-items: center;
  }
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const PreHeader = styled.div`
  background-color: ${({ fill }) => fill};
width: 100%;
  border-radius: 10px;
  padding: 15px;
    box-shadow: inset 0px 4px 14px rgba(0, 0, 0, 0.3);
      @media (max-width: 768px) {
width: 95%;
  }
`;

const TrimmedPreHeader = styled(PreHeader)`
width: 95%;
  border-radius: 10px;
  padding: 15px;
`;



const Text = styled.div`
  user-select: none;
  font-family: 'Akkordeon Seven', sans-serif;
  font-size: 4.4em;
  color: ${({ theme }) => theme.colors.textPrimary};
  -webkit-background-clip: text;
  background-clip: text;
   text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const path2 = 'M 100 1050 Q 0 100 450 250 Q 1850 700 550 600 Q 50 100 1900 100 C 550 800 450 50 1600 950 C 1100 0 1000 900 1800 400 A 50 50 0 1 1 0 750 ';
function AboutUs() {
    return (
        <MainContainer>
            <BgOverlay>
                <AnimatedSplinePath
                    path={path2}
                    lineColor={theme.colors.brand.orange}
                    sWidth={155}
                    speed={15}
                    gColor1={theme.colors.brand.yellow}
                    gColor2={theme.colors.brand.orange}
                    gColor3={theme.colors.brand.purple}
                />
            </BgOverlay>
            <ContentContainer>
                <BodyContainer>
                    <ColumnContainer>
                        <DynaContainer>
                            <ColumnContainer mHeight={150}>
                                <TrimmedPreHeader fill={theme.colors.brand.blue}>
                                    <Text>Media Partners</Text>
                                </TrimmedPreHeader>
                                <DynaContainer
                                    className="dyna-container-partners"
                                >
                                    <BentoBlock
                                        textTitle="Partner 1"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.purple}
                                        defaultImage={imageAwardsUnhovered2}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="Partner 1"
                                    />
                                    <BentoBlock
                                        textTitle="Partner 2"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.red}
                                        defaultImage={imageAwardsUnhovered2}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="Partner 2"
                                    />
                                    <BentoBlock
                                        textTitle="Partner 3"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.yellow}
                                        defaultImage={imageAwardsUnhovered2}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="Partner 3"
                                    />
                                </DynaContainer>
                                <TrimmedPreHeader fill={theme.colors.brand.orange}>
                                    <Text>Sponsors</Text>
                                </TrimmedPreHeader>
                                <DynaContainer
                                    className="dyna-container-sponsors"
                                >
                                    <BentoBlock
                                        textTitle="Aspire"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.pink}
                                        defaultImage={imageAwardsUnhovered1}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="Aspire"
                                    />
                                    <BentoBlock
                                        textTitle="SMOK"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.blue}
                                        defaultImage={imageAwardsUnhovered1}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="SMOK"
                                    />
                                    <BentoBlock
                                        textTitle="RELX"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.orange}
                                        defaultImage={imageAwardsUnhovered1}
                                        rImage={brandLogos[11]}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="RELX"
                                    />
                                </DynaContainer>
                                <DynaContainer
                                    className="dyna-container-sponsors"
                                >
                                    <BentoBlock
                                        textTitle="Forge"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.pink}
                                        defaultImage={imageAwardsUnhovered1}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="Forge"
                                    />
                                    <BentoBlock
                                        textTitle="IQOS"
                                        textSize="4em"
                                        textAlign='center'
                                        defaultImage={imageAwardsUnhovered1}
                                        rImage={brandLogos[6]}
                                        fillColor={theme.colors.brand.blue}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="IQOS"
                                    />
                                    <BentoBlock
                                        textTitle="JTI"
                                        textSize="4em"
                                        textAlign='center'
                                        fillColor={theme.colors.brand.blue}
                                        defaultImage={imageAwardsUnhovered1}
                                        mWidth={16}
                                        mHeight={32}
                                        hoverText="JTI"
                                    />

                                </DynaContainer>


                            </ColumnContainer>
                            <Newsletter />
                        </DynaContainer>
                        <PreHeader fill={theme.colors.brand.red}>
                            <Text>Contact Us</Text>
                        </PreHeader>
                        <DynaContainer>
                            <ContactInfo
                                contactName="Person A"
                                contactPosition="Director"
                                contactEmail="test@gmail.com"
                                contactPhoneNumber="099000134"
                            />
                            <ContactInfo
                                contactName="Person B"
                                contactPosition="Director"
                                contactEmail="test@gmail.com"
                                contactPhoneNumber="099000134"
                            />
                            <ContactInfo
                                contactName="Person C"
                                contactPosition="Director"
                                contactEmail="test@gmail.com"
                                contactPhoneNumber="099000134"
                            />
                            <ContactInfo
                                contactName="Person D"
                                contactPosition="Director"
                                contactEmail="test@gmail.com"
                                contactPhoneNumber="099000134"
                            />
                        </DynaContainer>

                    </ColumnContainer>
                </BodyContainer>
            </ContentContainer>
        </MainContainer>
    );
}

export default AboutUs;
