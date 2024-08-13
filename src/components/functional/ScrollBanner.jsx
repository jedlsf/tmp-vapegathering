import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const BannerContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  animation: ${scroll} 120s linear infinite;
`;

const BannerImage = styled.img`
  width: ${({ offset }) => offset}px;
  height: auto;
`;

const ScrollBanner = ({ imageUrl, offset = 1920 }) => {
    return (
        <BannerContainer>
            <ImageWrapper>
                <BannerImage src={imageUrl} alt="Scrolling Banner" offset={offset} />
                <BannerImage src={imageUrl} alt="Scrolling Banner Duplicate" offset={offset} />
            </ImageWrapper>
        </BannerContainer>
    );
};

export default ScrollBanner;
