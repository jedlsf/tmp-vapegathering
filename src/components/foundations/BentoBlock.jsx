import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme.js';

const Container = styled.div`
  max-width: ${(props) => props.mWidth}px;
  width: 100%;
  max-height: 100%;
  height: ${(props) => props.mHeight}px;
  padding: 20px;
  background-color: ${(props) => (props.defaultImage ? 'transparent' : props.fillColor)};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};

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
  left: 15px;
  z-index: 2;
  font-size: ${({ theme }) => theme.typography.sizes.header};
  font-weight: ${({ theme }) => theme.typography.weights.subject};
  color: ${(props) => props.textColor};
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 1px 3px 14px #000000;
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
  opacity: ${(props) => (props.isHovered ? '0' : '1')};
  transition: opacity 0.3s ease;
  z-index: 0;
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
  offsetY = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      defaultImage={defaultImage}
    >
      <Text textColor={textColor}>
        {isHovered && rType === "image" && hoverText ? defaultHoverText : textTitle}
      </Text>
      {rType === "image" && (
        <>
          {defaultImage && (
            <DefaultImage
              src={defaultImage}
              alt="Default Image"
              isHovered={isHovered}
              offsetX={offsetX}
              offsetY={offsetY}
            />
          )}
          <Image
            src={rImage}
            alt="Reveal Image"
            isHovered={isHovered}
            offsetX={offsetX}
            offsetY={offsetY}
          />
        </>
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
