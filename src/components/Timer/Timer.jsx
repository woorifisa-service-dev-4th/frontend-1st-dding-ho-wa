import React, { useState, useEffect } from 'react';
import {
  StyledTimerContainer,
  StyledProgressBar,
  StyledProgress,
  StyledBellImg,
} from './Timer.style';
import BellImg from '@/assets/img/bell.png';

export const Timer = ({ totalTime, onTimeEnd }) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= totalTime) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [totalTime]);

  useEffect(() => {
    if (elapsed >= totalTime) {
      onTimeEnd?.();
    }
  }, [elapsed, totalTime]);

  const progressPercentage = (elapsed / totalTime) * 100;

  return (
    <StyledTimerContainer>
      <StyledBellImg src={BellImg} alt="노란 종" />
      <StyledProgressBar>
        <StyledProgress style={{ width: `${progressPercentage}%` }} />
      </StyledProgressBar>
    </StyledTimerContainer>
  );
};
