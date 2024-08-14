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
  text-shadow: 2px 2px 6px #000000;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
  transition: opacity 0.3s ease;
  z-index: 1; /* Ensure it's above the default image */
`;

const DefaultImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isHovered ? '0' : '1')};
  transition: opacity 0.3s ease;
  z-index: 0; /* Ensure it's below the reveal image */
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
  defaultImage = null // New prop with a default value of null
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
          {defaultImage && <DefaultImage src={defaultImage} alt="Default Image" isHovered={isHovered} />}
          <Image src={rImage} alt="Reveal Image" isHovered={isHovered} />
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
