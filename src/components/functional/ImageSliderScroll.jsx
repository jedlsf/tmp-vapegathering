import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`;

const ImageSliderScroll = ({ listImages, autoplay = true, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        let sliderInterval;
        if (autoplay) {
            sliderInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % listImages.length);
            }, interval);
        }
        return () => {
            if (sliderInterval) clearInterval(sliderInterval);
        };
    }, [autoplay, interval, listImages.length]);

    const handleScroll = (event) => {
        if (event.deltaY < 0) {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? listImages.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % listImages.length);
        }
    };

    return (
        <SliderContainer
            ref={sliderRef}
            onWheel={handleScroll}
            onMouseEnter={() => autoplay && clearInterval(sliderRef.current)}
            onMouseLeave={() => {
                if (autoplay) {
                    sliderRef.current = setInterval(() => {
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % listImages.length);
                    }, interval);
                }
            }}
        >
            <ImageContainer
                style={{ backgroundImage: `url(${listImages[currentIndex]})` }}
            />
        </SliderContainer>
    );
};

export default ImageSliderScroll;
