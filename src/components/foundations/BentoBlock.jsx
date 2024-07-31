import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => props.mWidth}px;
  width: 100%;
  max-height: 100%;
  height: ${(props) => props.mHeight}px;
  padding: 20px;
  background-color: ${(props) => props.fillColor};
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 20px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.03);
  }

  &:hover img {
    opacity: 1;
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
  left: 15px;
  z-index: 2;
  font-size: ${({ theme }) => theme.typography.sizes.header};
  font-weight: ${({ theme }) => theme.typography.weights.subject};
  color: ${({ theme }) => theme.colors.primaryBackground};
  -webkit-background-clip: text;
  background-clip: text;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const BentoBlock = ({ textTitle, fillColor, rImage, mWidth, mHeight }) => {
  return (
    <Container fillColor={fillColor} mWidth={mWidth} mHeight={mHeight}>
      <Text>{textTitle}</Text>
      <Image src={rImage} alt="Reveal Image" />
    </Container>
  );
};

export default BentoBlock;
