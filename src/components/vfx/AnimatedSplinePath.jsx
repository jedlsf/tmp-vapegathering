import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const reverseDraw = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: ${({ length }) => length};
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg, 
    ${({ gColor1 }) => gColor1},
    ${({ gColor2 }) => gColor2}, 
    ${({ gColor3 }) => gColor3}
  );
  filter: url(#blurFilter); /* Apply the blur filter */
`;

const Path = styled.path`
  fill: none;
  stroke: ${({ lineColor }) => lineColor}; /* Dynamic stroke color */
  stroke-width: ${({ sWidth }) => sWidth}; /* Dynamic stroke width */
  stroke-dasharray: ${({ length }) => length};
  stroke-dashoffset: ${({ length }) => length};
  stroke-linecap: round; /* Rounded end caps */
  stroke-linejoin: round; /* Rounded corners */
  ${({ speed }) => css`
    animation: ${draw} ${speed}s linear forwards, ${reverseDraw} ${speed}s linear forwards ${speed}s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  `}; /* Dynamic speed, alternating direction, and infinite loop */
`;

const AnimatedSplinePath = ({ path, lineColor, sWidth, speed, gColor1, gColor2, gColor3 }) => {
    const pathRef = useRef(null);
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setLength(pathRef.current.getTotalLength());
        }
    }, [path]);

    return (
        <Svg
            viewBox="0 0 1920 1080"
            gColor1={gColor1}
            gColor2={gColor2}
            gColor3={gColor3}
        >
            <defs>
                <filter id="blurFilter" x="0" y="0" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
            <Path
                ref={pathRef}
                d={path}
                lineColor={lineColor}
                sWidth={sWidth}
                speed={speed}
                length={length}
            />
        </Svg>
    );
};

AnimatedSplinePath.propTypes = {
    path: PropTypes.string.isRequired,
    lineColor: PropTypes.string,
    sWidth: PropTypes.number,
    speed: PropTypes.number,
    gColor1: PropTypes.string,
    gColor2: PropTypes.string,
    gColor3: PropTypes.string,
};

AnimatedSplinePath.defaultProps = {
    lineColor: '#d6f500', // Default stroke color
    sWidth: 2, // Default stroke width
    speed: 5, // Default animation speed
    gColor1: '#ff7e5f', // Default gradient color 1
    gColor2: '#feb47b', // Default gradient color 2
    gColor3: '#ff6f61', // Default gradient color 3
};

export default AnimatedSplinePath;
