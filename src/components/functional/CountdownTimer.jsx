import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
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
  color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 5px;
  padding: 10px;
  margin: 0 2px;
  user-select: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  ${({ hoverColor }) => css`
    &:hover {
      transform: scale(1.1);
      background-color: ${hoverColor};
    }
  `}
`;

const Label = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.typography.sizes.mini};
  font-weight: ${({ theme }) => theme.typography.weights.subject};: ${({ theme }) => theme.typography.sizes.mini};
  color: ${({ theme }) => theme.colors.secondaryBackground};
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
        seconds: theme.colors.secondaryBackground,
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
