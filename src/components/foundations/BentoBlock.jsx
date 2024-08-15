import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme.js';

const Container = styled.div`
  max-width: ${(props) => props.mWidth}vw;
  width: 100%;
  max-height: 100%;
  height: ${(props) => props.mHeight}vh;
  padding: 20px;
  background-color: ${(props) =>
    props.defaultImage ? (props.isImageLoaded ? 'transparent' : 'transparent') : props.fillColor};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
    box-shadow: inset 0px 3px 9px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.03);
    
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 200px;
  }
`;

const Text = styled.div`
  user-select: none;
  position: absolute;
  bottom: 15px;
  padding: 10px;
  z-index: 2;
  font-size: ${(props) => props.textSize || theme.typography.sizes.header};
  font-weight: ${({ theme }) => theme.typography.weights.subject};
  color: ${(props) => props.textColor};
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 1px 2px 9px #000000;
  text-align: ${(props) => props.textAlign || 'left'};
  ${(props) => {
    if (props.textAlign === 'center') {
      return `
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
      `;
    } else if (props.textAlign === 'right') {
      return `
        right: 15px;
        left: auto;
      `;
    } else {
      return `
        left: 15px;
      `;
    }
  }}
`;


const Image = styled.img`
  position: absolute;
  top: ${(props) => props.offsetY}%;
  left: ${(props) => props.offsetX}%;
  width: calc(100% + ${(props) => Math.abs(props.offsetX * 2)}%);
  height: calc(100% + ${(props) => Math.abs(props.offsetY * 2)}%);
  object-fit: cover;
  transform: translate(-${(props) => props.offsetX}%, -${(props) => props.offsetY}%);
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
  transition: opacity 0.3s ease;
  z-index: 1;

`;

const DefaultImage = styled.img`
  position: absolute;
  top: ${(props) => props.offsetY}%;
  left: ${(props) => props.offsetX}%;
  width: calc(100% + ${(props) => Math.abs(props.offsetX * 2)}%);
  height: calc(100% + ${(props) => Math.abs(props.offsetY * 2)}%);
  object-fit: cover;
  transform: translate(-${(props) => props.offsetX}%, -${(props) => props.offsetY}%);
  opacity: ${(props) => (props.isImageLoaded ? '1' : '0')};
  transition: opacity 0.3s ease;
  z-index: 1;

`;

const RevealComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isHovered ? '0.8' : '0')};
  transition: opacity 0.3s ease;
  z-index: 2;
`;

const BentoBlock = ({
  textTitle,
  fillColor,
  rImage,
  mWidth,
  mHeight,
  rType = "image",
  children,
  hoverText,
  clickPath,
  textColor = theme.colors.textPrimary,
  defaultImage = null,
  offsetX = 0,
  offsetY = 0,
  textAlign = 'left', // New prop for text alignment
  textSize, // New prop for text size
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set to true once the defaultImage is fully loaded
  };

  const handleClick = () => {
    if (clickPath) {
      window.location.href = clickPath;
    }
  };

  const defaultHoverText = hoverText || textTitle;

  return (
    <Container
      fillColor={fillColor}
      mWidth={mWidth}
      mHeight={mHeight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      clickable={Boolean(clickPath)}
      isImageLoaded={isImageLoaded}
      defaultImage={defaultImage} // Pass the defaultImage prop here
    >
      <Text textColor={textColor} textAlign={textAlign} textSize={textSize}>
        {isHovered && rType === "image" && hoverText ? defaultHoverText : textTitle}
      </Text>
      {defaultImage && (
        <DefaultImage
          src={defaultImage}
          alt="Default Image"
          isImageLoaded={isImageLoaded}
          offsetX={offsetX}
          offsetY={offsetY}
          onLoad={handleImageLoad}
        />
      )}
      {rType === "image" && (
        <Image
          src={rImage}
          alt="Reveal Image"
          isHovered={isHovered}
          offsetX={offsetX}
          offsetY={offsetY}
        />
      )}
      {rType !== "image" && (
        <RevealComponent className="reveal-component" isHovered={isHovered}>
          {children}
        </RevealComponent>
      )}
    </Container>
  );
};

export default BentoBlock;
