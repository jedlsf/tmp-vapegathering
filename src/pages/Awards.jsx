import React from 'react';
import styled from 'styled-components';
import BentoBlock from '../components/foundations/BentoBlock';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme.js';
import { brandLogos } from '../assets-imported/assets.js';

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
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  gap: 15px;
  box-sizing: border-box;
  height: auto; /* Allow height to adjust based on content */
  border-radius: 15px;
  opacity: 1;
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
`;

const path1 = 'M 0 0 Q 600 100 250 200 Q 0 250 150 550 Q 400 850 850 700 Q 1300 500 1200 300 Q 1000 50 1550 50 Q 1900 50 1700 650 Q 1500 1050 1050 1050 ';
const path2 = 'M 0 600 Q 500 1100 1250 850 C 1800 550 650 300 1900 0 ';
const path3 = "M 300 0 Q 500 1100 1000 950 C 1900 400 0 200 1900 250 ";
const path4 = "M 0 50 Q 0 500 200 300 Q 450 0 550 350 C 700 800 500 1100 1000 950 C 1650 450 600 400 1150 100 A 50 50 0 1 1 1750 1050 ";
function Awards() {
    return (
        <MainContainer>
            <BgOverlay>
                <AnimatedSplinePath
                    path={path4}
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
                    <ColumnContainer>
                        <BentoBlock
                            textTitle="Brand of the Year"
                            fillColor={theme.colors.primaryBackground}
                            textColor={theme.colors.textPrimary}
                            rImage={brandLogos[11]}
                            mWidth={1280}
                            mHeight={200}
                            hoverText="RELX"
                            clickPath="https://relxnow.ph"
                        />
                        <DynaContainer>
                            <BentoBlock
                                textTitle="Best Advocate"
                                fillColor={theme.colors.brand.blue}
                                rImage={brandLogos[6]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="IQOS"
                                clickPath="https://www.iqos.com/ph/en/home.html"
                            />
                            <BentoBlock
                                textTitle="Best Influencer"
                                fillColor={theme.colors.brand.yellow}
                                rImage={brandLogos[12]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="Shift"
                                clickPath="https://web.facebook.com/shftinternational"
                            />
                            <BentoBlock
                                textTitle="Outstanding Contributor to the Vaping Industry"
                                fillColor={theme.colors.brand.green}
                                rImage={brandLogos[11]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="RELX"
                                clickPath="https://relxnow.ph"
                            />
                            <BentoBlock
                                textTitle="Best Booth Activation"
                                fillColor={theme.colors.brand.pink}
                                rImage={brandLogos[2]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="Cholo's Blend"
                                clickPath="https://web.facebook.com/CholosBlendOfficial"
                            />
                            <BentoBlock
                                textTitle="Rookie of the Year"
                                fillColor={theme.colors.brand.red}
                                rImage={brandLogos[5]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="IQ Puff Master"
                            />
                            <BentoBlock
                                textTitle="Best in Flavor"
                                fillColor={theme.colors.brand.orange}
                                rImage={brandLogos[4]}
                                mWidth={200}
                                mHeight={200}
                                hoverText="FLABAR"
                                clickPath="https://www.flabarlab.com"
                            />
                        </DynaContainer>
                        <DynaContainer>
                            <BentoBlock
                                textTitle="Best Tobacco Flavor"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[7]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="Liquido"
                            />
                            <BentoBlock
                                textTitle="Best Fruity Flavor"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[9]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="Nevoks"
                            />
                            <BentoBlock
                                textTitle="Best Pastry Flavor"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[10]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="Pastry Vapors"
                            />
                            <BentoBlock
                                textTitle="Best Menthol Flavor"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[1]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="Boss"
                            />
                            <BentoBlock
                                textTitle="Best Free Base Juice"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[8]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="MO Flavor"
                            />
                            <BentoBlock
                                textTitle="Best Closed Pod"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[13]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="UZOQ"
                            />
                            <BentoBlock
                                textTitle="Best Disposable"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[0]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="Aerogin"
                            />
                            <BentoBlock
                                textTitle="Best Branding and Marketing"
                                fillColor={theme.colors.primaryBackground}
                                rImage={brandLogos[3]}
                                mWidth={145}
                                mHeight={145}
                                hoverText="ELF BAR"
                            />
                        </DynaContainer>
                    </ColumnContainer>
                </BodyContainer>
            </ContentContainer>
        </MainContainer>
    );
}

export default Awards;
