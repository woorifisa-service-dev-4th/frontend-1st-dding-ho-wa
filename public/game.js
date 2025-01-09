// 이미지 배열 (랜덤으로 선택할 이미지)
import {
  updateProgressBar,
  resetProgressBar,
  startProgressBar,
} from './timer.js';
import { saveResult } from './api/api.js';

const bagTopElement = document.querySelector('.img_bagTop');
bagTopElement.addEventListener('animationstart', () => {
  console.log('애니메이션 시작');
});
bagTopElement.addEventListener('animationend', () => {
  console.log('애니메이션 종료');
});
let nickname;
let correctCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  nickname = localStorage.getItem('nickname');
});

resetProgressBar();
startProgressBar();

const totalTime = 20;
const images = [
  { src: 'img/짜장면.png', alt: '짜장면' },
  { src: 'img/짬뽕.png', alt: '짬뽕' },
];
const slots = ['slot1', 'slot2', 'slot3'];

const imgBagTop = document.querySelector('.img_bagTop');
const bagTopContainer = document.querySelector('.bag_top_container');

function triggerBagTopAnimation() {
  const bagTopElement = document.querySelector('.img_bagTop');
  if (!bagTopElement) {
    console.error('img_bagTop 요소를 찾을 수 없습니다.');
    return;
  }

  bagTopElement.classList.remove('bagTopDown');
  void bagTopElement.offsetHeight;
  bagTopElement.classList.add('bagTopDown');

  bagTopElement.addEventListener('animationstart', () => {
    console.log('애니메이션 시작');
  });

  bagTopElement.addEventListener('animationend', () => {
    console.log('애니메이션 종료');
    bagTopElement.classList.remove('bagTopDown');
  });
}

function repeatBagTopAnimation(repeatCount = 10) {
  const bagTopElement = document.querySelector('.img_bagTop');
  if (!bagTopElement) {
    console.error('img_bagTop 요소를 찾을 수 없습니다.');
    return;
  }

  let count = 0; // 반복 횟수 추적

  function startAnimation() {
    if (count >= repeatCount) {
      console.log('애니메이션 종료');
      return;
    }

    bagTopElement.style.animation = 'none';
    void bagTopElement.offsetWidth;
    bagTopElement.style.animation = 'bagTopDown 1s ease-in-out forwards';

    count++;

    bagTopElement.addEventListener(
      'animationend',
      () => {
        setTimeout(() => {
          startAnimation();
        }, 1000);
      },
      { once: true }
    );
  }

  startAnimation();
}

repeatBagTopAnimation(10);

function openModal() {
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'none';
  }
}

function openFailModal() {
  const modal = document.querySelector('.container_grading_fail_overlay');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeFailModal() {
  const modal = document.querySelector('.container_grading_fail_overlay');
  if (modal) {
    modal.style.display = 'none';
  }
}

function setContainerSize() {
  const imgRect = imgBagTop.getBoundingClientRect();
  bagTopContainer.style.width = `${imgRect.width}px`;
  bagTopContainer.style.height = `${imgRect.height}px`;
}

if (imgBagTop.complete) {
  setContainerSize();
} else {
  imgBagTop.onload = setContainerSize;
}

window.addEventListener('resize', setContainerSize);

function generateRandomImages(imagesArray, imageCount) {
  for (let i = 0; i < imageCount; i++) {
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    const randomImage =
      imagesArray[Math.floor(Math.random() * imagesArray.length)];

    const slotElement = document.getElementById(randomSlot);

    const slotRect = slotElement.getBoundingClientRect();

    const SIZE = 0.05 + Math.random() * (0.08 - 0.05);
    const imageWidth = slotRect.width * SIZE;
    const imageHeight = slotRect.height * SIZE;

    const WEIGHT = 3;
    const randomLeft = Math.random() * (slotRect.width - imageWidth * WEIGHT);
    const randomTop = Math.random() * (slotRect.height - imageHeight * WEIGHT);

    const imgElement = document.createElement('img');
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt;

    imgElement.style.width = `${imageWidth}px`;
    imgElement.style.height = 'auto';
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${randomLeft}px`;
    imgElement.style.top = `${randomTop}px`;

    slotElement.appendChild(imgElement);
  }
}

function generatePairImages() {
  const jjajangImage = images.find((img) => img.alt === '짜장면');
  const jjambbongImage = images.find((img) => img.alt === '짬뽕');
  const selectedImages = [jjajangImage, jjambbongImage];

  selectedImages.forEach((randomImage) => {
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    const slotElement = document.getElementById(randomSlot);

    const slotRect = slotElement.getBoundingClientRect();

    const SIZE = 0.05 + Math.random() * (0.08 - 0.05);
    const imageWidth = slotRect.width * SIZE;

    const WEIGHT = 3;
    const randomLeft = Math.random() * (slotRect.width - imageWidth * WEIGHT);
    const randomTop = Math.random() * (slotRect.height - imageWidth * WEIGHT);

    const imgElement = document.createElement('img');
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt;

    imgElement.style.width = `${imageWidth}px`;
    imgElement.style.height = 'auto';
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${randomLeft}px`;
    imgElement.style.top = `${randomTop}px`;

    slotElement.appendChild(imgElement);
  });
}

function generateJjajangImage() {
  return new Promise((resolve) => {
    const clickHandlers = [];
    clearPreviousImages();
    const jjajangImage = images.filter((img) => img.alt === '짜장면');
    generateRandomImages(jjajangImage, 1);

    const slotImages = document.querySelectorAll(
      '#slot1 img, #slot2 img, #slot3 img'
    );

    slotImages.forEach((image) => {
      if (image.alt === '짜장면') {
        const clickHandler = () => {
          correctCount++;
          console.log('정답! 현재 정답 수:', correctCount);
          openModal('.container_grading_overlay');

          setTimeout(() => {
            closeModal('.container_grading_overlay');
          }, 1000);
          removeClickListeners();
          resolve();
        };
        image.addEventListener('click', clickHandler);
        clickHandlers.push({ element: image, handler: clickHandler });
      }
    });

    const timer = setTimeout(() => {
      removeClickListeners();
      resolve();
    }, 2000);

    function removeClickListeners() {
      clearTimeout(timer);
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler);
      });
    }
  });
}

function generateJjajangAndJjambbongImages() {
  return new Promise((resolve) => {
    const clickHandlers = [];
    clearPreviousImages();
    generatePairImages();

    const slotImages = document.querySelectorAll(
      '#slot1 img, #slot2 img, #slot3 img'
    );

    slotImages.forEach((image) => {
      if (image.alt === '짜장면') {
        const clickHandler1 = () => {
          correctCount++;
          openModal('.container_grading_overlay');

          setTimeout(() => {
            closeModal('.container_grading_overlay');
          }, 1000);
          removeClickListeners();
          resolve();
        };
        image.addEventListener('click', clickHandler1);
        clickHandlers.push({ element: image, handler: clickHandler1 });
      } else if (image.alt === '짬뽕') {
        const clickHandler2 = () => {
          openFailModal('.container_fail_grading_overlay');

          setTimeout(() => {
            closeFailModal('.container_fail_grading_overlay');
          }, 1000);
          removeClickListeners();
          resolve();
        };
        image.addEventListener('click', clickHandler2);
        clickHandlers.push({ element: image, handler: clickHandler2 });
      }
    });

    const timer = setTimeout(() => {
      removeClickListeners();
      resolve();
    }, 2000);

    function removeClickListeners() {
      clearTimeout(timer);
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler);
      });
    }
  });
}

function generateNoImages() {
  return new Promise((resolve) => {
    clearPreviousImages();
    const timer = setTimeout(() => {
      removeClickListener();
      correctCount++;
      resolve();
    }, 2000);

    function handleClick() {
      clearTimeout(timer);
      removeClickListener();
      resolve();
    }

    bagTopContainer.addEventListener('click', handleClick);

    function removeClickListener() {
      bagTopContainer.removeEventListener('click', handleClick);
    }
  });
}

function clearPreviousImages() {
  slots.forEach((slotId) => {
    const slotElement = document.getElementById(slotId);
    if (slotElement) {
      const images = slotElement.querySelectorAll('img');
      images.forEach((image) => {
        const newImage = image.cloneNode(true);
        image.replaceWith(newImage);
      });
      slotElement.innerHTML = '';
    }
  });
}

function callRandomFunction() {
  const functions = [
    () => generateJjajangImage(),
    () => generateJjajangAndJjambbongImages(),
    () => generateNoImages(),
  ];
  const randomFunction =
    functions[Math.floor(Math.random() * functions.length)];
  return randomFunction();
}

function callRandomFunctionsGameLoop() {
  const timer = totalTime;
  let timeElapsed = 0;
  let interval;

  interval = setInterval(() => {
    timeElapsed++;
    if (timeElapsed >= timer) {
      clearInterval(interval);
      console.log("Game Over - Time's up!");
      endGame();
    }
  }, 1000);

  async function iterate() {
    if (timeElapsed < timer) {
      try {
        await callRandomFunction();
        console.log(timeElapsed);
        if (timeElapsed < timer) {
          console.log('animation called');
          triggerBagTopAnimation();
          iterate();
        }
      } catch (error) {
        // ✅ catch 블록을 try 블록 바깥으로 이동
        console.error('비동기 작업 중 오류 발생:', error);
        clearInterval(interval);
      }
    }
  }

  async function endGame() {
    clearPreviousImages();
    try {
      console.log(nickname);
      const result = await saveResult(nickname, correctCount);
      console.log('API 호출 결과:', result);
    } catch (error) {
      console.error('API 호출 실패:', error);
      alert('점수 저장 중 오류가 발생했습니다.');
    }
  }

  iterate();
}

callRandomFunctionsGameLoop();
