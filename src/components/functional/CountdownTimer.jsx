import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  padding: 10px;
  @media (max-width: 768px) {
    transform: scale(0.6);
  }
    z-index: 5000;
 
`;

const SegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const Segment = styled.div`
  user-select: none;
  display: flex;
  margin: 0;
`;

const Character = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 5px;
  padding: 5px;
  margin: 0 2px;
  display: flex;
  user-select: none;
    align-items: center;
      justify-content: center;
  width: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  font-family: 'Akkordeon Seven', sans-serif;
  font-size: ${({ theme }) => theme.typography.sizes.title};

  ${({ hoverColor }) => css`
    &:hover {
      transform: scale(1.1);
      background-color: ${hoverColor};
    }
  `}
`;

const Label = styled.div`
  margin-top: 5px;
  font-family: 'Akkordeon Three', sans-serif;
  letter-spacing: 0.2em; 
  font-size: ${({ theme }) => theme.typography.sizes.subject};
  font-weight: ${({ theme }) => theme.typography.weights.subject};: ${({ theme }) => theme.typography.sizes.mini};
  color: ${({ theme }) => theme.colors.primaryBackground};
  user-select: none;
`;
const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatTimeSegment = (segment) => {
        return segment.toString().padStart(2, '0').split('');
    };

    const hoverColors = {
        months: theme.colors.brand.red,
        days: theme.colors.brand.blue,
        hours: theme.colors.brand.green,
        minutes: theme.colors.brand.yellow,
        seconds: theme.colors.brand.purple,
    };

    const labels = {
        months: 'Months',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
    };

    return (
        <Container>
            {Object.keys(timeLeft).map((unit, index) => (
                <SegmentContainer key={index}>
                    <Segment>
                        {formatTimeSegment(timeLeft[unit]).map((char, idx) => (
                            <Character key={idx} hoverColor={hoverColors[unit]}>
                                {char}
                            </Character>
                        ))}
                        {index < Object.keys(timeLeft).length - 1 && <span> : </span>}
                    </Segment>
                    <Label>{labels[unit]}</Label>
                </SegmentContainer>
            ))}
        </Container>
    );
};

const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const target = targetDate ? new Date(targetDate) : new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const difference = target - now;
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
            days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    } else {
        timeLeft = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
};

export default CountdownTimer;
