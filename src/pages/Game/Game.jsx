import React, { useState, useEffect, useRef } from 'react';
import { Timer } from '../../components/Timer/Timer';
import { WarningScreen } from '../../components/WarningScreen/WarningScreen';
import { SLOTS, IMAGES, TOTAL_TIME } from '../../constants/game_constant';
import {
  StyledBackground,
  StyledBag,
  StyledBagTop,
  StyledBagTopContainer,
  StyledSlot,
} from './Game.style';
import Bag from '@/assets/img/bag.svg';
import BagTop from '@/assets/img/bagTop.webp';
import Audio from '@/assets/audio/quizBGM.mp3';
import { useSaveResult } from '../../hooks/useSaveResult';

export const Game = () => {
  const nickname = localStorage.getItem('nickname');
  const [correctCount, setCorrectCount] = useState(0);
  const [images, setImages] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const bagTopRef = useRef(null);
  const bagTopContainerRef = useRef(null);

  const { saveResult } = useSaveResult();

  useEffect(() => {
    generateImages();
    updateContainerSize();
    triggerBagTopAnimation();

    const handleResize = () => updateContainerSize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateContainerSize = () => {
    if (bagTopRef.current && bagTopContainerRef.current) {
      const rect = bagTopRef.current.getBoundingClientRect();
      bagTopContainerRef.current.style.width = `${rect.width}px`;
      bagTopContainerRef.current.style.height = `${rect.height}px`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        generateImages();
        triggerBagTopAnimation();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isGameOver, images]);

  const generateImages = () => {
    const randomImages = SLOTS.map(
      () => IMAGES[Math.floor(Math.random() * IMAGES.length)]
    );
    setImages(randomImages);
  };

  const handleSlotClick = (alt) => {
    if (isGameOver) return;

    if (alt === '짜장면') {
      setCorrectCount((prev) => prev + 1);
    } else {
      console.log('틀린 선택입니다.');
    }

    triggerBagTopAnimation();
    generateImages();
  };

  const randomSize = () => Math.random() * (50 - 30) + 30;
  const randomPosition = (max) => Math.random() * max;

  const handleTimeEnd = async () => {
    setIsGameOver(true);

    await saveResult(nickname, correctCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        generateImages();
        triggerBagTopAnimation();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  const triggerBagTopAnimation = () => {
    if (bagTopRef.current) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  };

  return (
    <>
      <audio autoPlay loop>
        <source src={Audio} type="audio/mpeg" />
      </audio>

      <WarningScreen />

      <StyledBackground>
        <Timer totalTime={TOTAL_TIME} onTimeEnd={handleTimeEnd} />

        <StyledBag src={Bag} alt="철가방" />
        <StyledBagTop
          ref={bagTopRef}
          src={BagTop}
          alt="철가방 뚜껑"
          $isAnimating={isAnimating}
        />

        <StyledBagTopContainer ref={bagTopContainerRef}>
          {SLOTS.map((slot, index) => (
            <StyledSlot key={slot} id={slot}>
              {images[index] && (
                <img
                  src={images[index].src}
                  alt={images[index].alt}
                  style={{
                    position: 'absolute',
                    left: `${randomPosition(70)}%`,
                    top: `${randomPosition(100)}%`,
                    width: `${randomSize()}px`,
                    height: 'auto',
                  }}
                  onClick={(e) => handleSlotClick(e.target.alt)}
                />
              )}
            </StyledSlot>
          ))}
        </StyledBagTopContainer>
      </StyledBackground>
    </>
  );
};
