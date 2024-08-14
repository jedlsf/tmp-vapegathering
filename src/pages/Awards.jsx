import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BentoBlock from '../components/foundations/BentoBlock';
import AnimatedSplinePath from '../components/vfx/AnimatedSplinePath';
import theme from '../theme.js';
import { brandLogos, imageAwardsBanner, imageAwardsUnhovered1, imageAwardsUnhovered2 } from '../assets-imported/assets.js';

// Define hash strings for unhovered images
const unhovered1Bhash = "U5O:kNEfNX?9,n?wF#ITP.VrXTR;-nn3s7s;";
const unhovered2Bhash = "U5P6y;NZO8rpxVxvozIU.Tson6ShNGayRixb";

// Styled components
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

const TopBanner = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 45px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 45px;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 45px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;

const FullWidthBentoBlock = styled(BentoBlock)`
  width: 100%;
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

// Path data for AnimatedSplinePath
const path4 = "M 0 50 Q 0 500 200 300 Q 450 0 550 350 C 700 800 500 1100 1000 950 C 1650 450 600 400 1150 100 A 50 50 0 1 1 1750 1050 ";

const Awards = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        setContainers(document.querySelectorAll('.dyna-container'));
    }, []);

    useEffect(() => {
        if (visibleIndex < containers.length) {
            const timeout = setTimeout(() => {
                setVisibleIndex(visibleIndex + 1);
            }, 1000); // Adjust the delay as needed
            return () => clearTimeout(timeout);
        }
    }, [visibleIndex, containers]);

    return (
        <MainContainer>
            <BgOverlay>
                <AnimatedSplinePath
                    path={path4}
                    lineColor={theme.colors.brand.orange}
                    sWidth={155}
                    speed={15}
                    gColor1={theme.colors.brand.purple}
                    gColor2={theme.colors.brand.blue}
                    gColor3={theme.colors.brand.yellow}
                />
            </BgOverlay>
            <ContentContainer>
                <ColumnContainer>
                    <TopBanner
                        src={imageAwardsBanner}
                    />
                    <DynaContainer
                        className="dyna-container"
                        style={{ opacity: visibleIndex >= 0 ? 1 : 0, transition: 'opacity 1s ease' }}
                    >
                        <BentoBlock
                            textTitle="Brand of the Year"
                            fillColor={theme.colors.brand.blue}
                            rImage={brandLogos[11]}
                            defaultImage={imageAwardsUnhovered1}
                            mWidth={25}
                            mHeight={50}
                            hoverText="RELX"
                            clickPath="https://relxnow.ph"
                            bhash={unhovered1Bhash}
                        />
                        <BentoBlock
                            textTitle="Best Advocate"
                            fillColor={theme.colors.brand.blue}
                            rImage={brandLogos[6]}
                            defaultImage={imageAwardsUnhovered1}
                            mWidth={25}
                            mHeight={50}
                            hoverText="IQOS"
                            clickPath="https://www.iqos.com/ph/en/home.html"
                            bhash={unhovered1Bhash}
                        />
                        <BentoBlock
                            textTitle="Best Influencer"
                            fillColor={theme.colors.brand.yellow}
                            rImage={brandLogos[12]}
                            defaultImage={imageAwardsUnhovered1}
                            bhash={unhovered1Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="Shift"
                            clickPath="https://web.facebook.com/shftinternational"
                        />
                    </DynaContainer>
                    <DynaContainer
                        className="dyna-container"
                        style={{ opacity: visibleIndex >= 1 ? 1 : 0, transition: 'opacity 1s ease' }}
                    >
                        <BentoBlock
                            textTitle="Outstanding Contributor to the Vaping Industry"
                            fillColor={theme.colors.brand.green}
                            rImage={brandLogos[11]}
                            defaultImage={imageAwardsUnhovered1}
                            bhash={unhovered1Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="RELX"
                            clickPath="https://relxnow.ph"
                        />
                        <BentoBlock
                            textTitle="Best Booth Activation"
                            fillColor={theme.colors.brand.pink}
                            rImage={brandLogos[2]}
                            defaultImage={imageAwardsUnhovered1}
                            bhash={unhovered1Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="Cholo's Blend"
                            clickPath="https://web.facebook.com/CholosBlendOfficial"
                        />
                        <BentoBlock
                            textTitle="Rookie of the Year"
                            fillColor={theme.colors.brand.red}
                            rImage={brandLogos[5]}
                            defaultImage={imageAwardsUnhovered1}
                            bhash={unhovered1Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="IQ Puff Master"
                        />
                    </DynaContainer>
                    <DynaContainer
                        className="dyna-container"
                        style={{ opacity: visibleIndex >= 2 ? 1 : 0, transition: 'opacity 1s ease' }}
                    >
                        <BentoBlock
                            textTitle="Best in Flavor"
                            fillColor={theme.colors.brand.orange}
                            rImage={brandLogos[4]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="FLABAR"
                            clickPath="https://www.flabarlab.com"
                        />
                        <BentoBlock
                            textTitle="Best Tobacco Flavor"
                            fillColor={theme.colors.primaryBackground}
                            rImage={brandLogos[7]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="Liquido"
                        />
                        <BentoBlock
                            textTitle="Best Fruity Flavor"
                            fillColor={theme.colors.primaryBackground}
                            rImage={brandLogos[9]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="Nevoks"
                        />
                    </DynaContainer>
                    <DynaContainer
                        className="dyna-container"
                        style={{ opacity: visibleIndex >= 3 ? 1 : 0, transition: 'opacity 1s ease' }}
                    >
                        <BentoBlock
                            textTitle="Best Pastry Flavor"
                            fillColor={theme.colors.primaryBackground}
                            rImage={brandLogos[10]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="Pastry Vapors"
                        />
                        <BentoBlock
                            textTitle="Best Menthol Flavor"
                            fillColor={theme.colors.primaryBackground}
                            rImage={brandLogos[1]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="MintyVape"
                        />
                        <BentoBlock
                            textTitle="Best CBD Flavor"
                            fillColor={theme.colors.primaryBackground}
                            rImage={brandLogos[3]}
                            defaultImage={imageAwardsUnhovered2}
                            bhash={unhovered2Bhash}
                            mWidth={25}
                            mHeight={50}
                            hoverText="CBD Vape Co."
                        />
                    </DynaContainer>
                </ColumnContainer>
            </ContentContainer>
        </MainContainer>
    );
};

export default Awards;
