// PhotoGallery.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme.js'; // Adjust the import based on your theme.js location

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.spacing}px;
  padding: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    grid-template-columns: repeat(${(props) => props.columns - 2}, 1fr);
  }
  
  @media (max-width: 950px) {
    grid-template-columns: repeat(${(props) => props.columns - 2}, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(${(props) => props.columns - 1}, 1fr);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  &:hover {
    transform: scale(1.03);
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const computeDimensions = (orientation, containerWidth) => {
    const minSize = 300;
    const width = Math.max(minSize, containerWidth);
    const height = Math.max(minSize, containerWidth);

    switch (orientation) {
        case 'landscape':
            return { width: width * 1.5, height: height };
        case 'portrait':
            return { width: width, height: height * 1.5 };
        case 'square':
            return { width: width, height: height };
        default:
            return { width: width, height: height };
    }
};

const PhotoGallery = ({ columns, listImages, orientation, spacing }) => {
    const [visibleImages, setVisibleImages] = useState([]);
    const containerWidth = 100 / columns;
    const { width, height } = computeDimensions(orientation, containerWidth);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setVisibleImages((prevImages) => {
                if (index < listImages.length) {
                    return [...prevImages, listImages[index++]];
                } else {
                    clearInterval(interval);
                    return prevImages;
                }
            });
        }, 300); // Adjust the interval duration to control the speed of loading

        return () => clearInterval(interval);
    }, [listImages]);

    return (
        <Container columns={columns} spacing={spacing}>
            {visibleImages.map((image, index) => (
                <ImageWrapper key={index} style={{ width: `${width}px`, height: `${height}px` }}>
                    <ImageContainer src={image} alt={`Gallery item ${index}`} />
                </ImageWrapper>
            ))}
        </Container>
    );
};

PhotoGallery.propTypes = {
    columns: PropTypes.number.isRequired,
    listImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    orientation: PropTypes.oneOf(['landscape', 'portrait', 'square']).isRequired,
    spacing: PropTypes.number,
};

export default PhotoGallery;
