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
  nickname= localStorage.getItem('nickname');
});



resetProgressBar();
startProgressBar();

const totalTime = 20;
const images = [
  { src: 'img/짜장면.png', alt: '짜장면' },
  { src: 'img/짬뽕.png', alt: '짬뽕' },
];
const slots = ['slot1', 'slot2', 'slot3'];

// 이미지와 컨테이너 참조
const imgBagTop = document.querySelector('.img_bagTop');
const bagTopContainer = document.querySelector('.bag_top_container');


function triggerBagTopAnimation() {
  const bagTopElement = document.querySelector('.img_bagTop'); // 애니메이션 대상 요소
  if (!bagTopElement) {
    console.error('img_bagTop 요소를 찾을 수 없습니다.');
    return;
  }

  // 기존 클래스 제거 후 reflow 발생
  // 기존 클래스 제거 후 다시 추가
  bagTopElement.classList.remove('bagTopDown');
  void bagTopElement.offsetWidth; // 강제로 reflow 발생 (애니메이션 초기화)
  bagTopElement.classList.add('bagTopDown');


  // 애니메이션이 끝난 후 클래스 제거 (선택 사항)
  bagTopElement.addEventListener('animationend', () => {
    bagTopElement.classList.remove('bagTopDown');
    console.log('애니메이션 완료');
  });
}


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
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'flex';
  }
}


function closeFailModal() {
  const modal = document.querySelector('.container_grading_overlay');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 이미지 크기를 가져와 컨테이너 크기 설정
function setContainerSize() {
  const imgRect = imgBagTop.getBoundingClientRect(); // 이미지 크기 가져오기
  bagTopContainer.style.width = `${imgRect.width}px`;
  bagTopContainer.style.height = `${imgRect.height}px`;
}

// 이미지가 로드된 상태에서도 크기를 설정
if (imgBagTop.complete) {
  setContainerSize();
} else {
  imgBagTop.onload = setContainerSize;
}

// 창 크기 변경 시에도 크기를 다시 계산
window.addEventListener('resize', setContainerSize);

// 랜덤 이미지를 슬롯에 생성 (이미지 배열과 생성할 사진 수를 매개변수로 받아 처리)
function generateRandomImages(imagesArray, imageCount) {
  for (let i = 0; i < imageCount; i++) {
    // 랜덤 슬롯 선택
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    // 랜덤 이미지 선택
    const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

    // 선택된 슬롯 요소
    const slotElement = document.getElementById(randomSlot);

    // 슬롯의 크기 가져오기
    const slotRect = slotElement.getBoundingClientRect();

    // 이미지의 크기 비율
    const SIZE = 0.05 + Math.random() * (0.08 - 0.05);
    const imageWidth = slotRect.width * SIZE;
    const imageHeight = slotRect.height * SIZE;

    // 랜덤 위치 계산 (슬롯 안에서 랜덤)
    const WEIGHT = 3;
    const randomLeft = Math.random() * (slotRect.width - imageWidth * WEIGHT);
    const randomTop = Math.random() * (slotRect.height - imageHeight * WEIGHT);

    // 새 이미지 요소 생성
    const imgElement = document.createElement('img');
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt;

    // 이미지 스타일 설정 (잘리지 않도록 설정)
    imgElement.style.width = `${imageWidth}px`;
    imgElement.style.height = 'auto'; // 높이는 자동으로 설정
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${randomLeft}px`;
    imgElement.style.top = `${randomTop}px`;
    // 슬롯에 이미지 추가
    slotElement.appendChild(imgElement);
  }
}

function generatePairImages() {
  const jjajangImage = images.find(img => img.alt === '짜장면');
  const jjambbongImage = images.find(img => img.alt === '짬뽕');
  const selectedImages = [jjajangImage, jjambbongImage];

  selectedImages.forEach(randomImage => {
    // 랜덤 슬롯 선택
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    // 선택된 슬롯 요소
    const slotElement = document.getElementById(randomSlot);

    // 슬롯의 크기 가져오기
    const slotRect = slotElement.getBoundingClientRect();

    // 이미지의 크기 비율
    const SIZE = 0.05 + Math.random() * (0.08 - 0.05);
    const imageWidth = slotRect.width * SIZE;

    // 랜덤 위치 계산 (슬롯 안에서 랜덤)
    const WEIGHT = 3;
    const randomLeft = Math.random() * (slotRect.width - imageWidth * WEIGHT);
    const randomTop = Math.random() * (slotRect.height - imageWidth * WEIGHT);

    // 새 이미지 요소 생성
    const imgElement = document.createElement('img');
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt;

    // 이미지 스타일 설정 (잘리지 않도록 설정)
    imgElement.style.width = `${imageWidth}px`;
    imgElement.style.height = 'auto'; // 높이는 자동으로 설정
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${randomLeft}px`;
    imgElement.style.top = `${randomTop}px`;

    // 슬롯에 이미지 추가
    slotElement.appendChild(imgElement);
  });
}

// 전역 정답 변수

// 짜장면 이미지만 사용하여 슬롯에 1개의 이미지를 생성
function generateJjajangImage() {
  return new Promise((resolve) => {
    const clickHandlers = [];
    clearPreviousImages();
    const jjajangImage = images.filter(img => img.alt === '짜장면');
    generateRandomImages(jjajangImage, 1);

    const slotImages = document.querySelectorAll('#slot1 img, #slot2 img, #slot3 img');
    // 2초 타이머 설정

    slotImages.forEach(image => {
      if (image.alt === '짜장면') {
        const clickHandler = () => {
          correctCount++;
          console.log('정답! 현재 정답 수:', correctCount);
          removeClickListeners(); // 클릭 리스너 제거
          resolve(); // Promise 해결
        };
        image.addEventListener('click', clickHandler);
        clickHandlers.push({ element: image, handler: clickHandler });

      }
    });

// 2초 타이머 설정
    const timer = setTimeout(() => {
      removeClickListeners(); // 클릭 리스너 제거
      resolve(); // Promise 해결
    }, 2000);

    // 클릭 리스너 제거 함수
    function removeClickListeners() {
      clearTimeout(timer); // 타이머 해제
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler); // 클릭 리스너 제거
      });
    }

  });
}

// 짜장면과 짬뽕 이미지를 사용하여 슬롯에 2개의 이미지를 랜덤 생성
function generateJjajangAndJjambbongImages() {
  return new Promise((resolve) => {
    const clickHandlers = [];
    clearPreviousImages();
    generatePairImages();

    const slotImages = document.querySelectorAll('#slot1 img, #slot2 img, #slot3 img');

    slotImages.forEach((image) => {
      if (image.alt === '짜장면') {
        const clickHandler1 = () => {
          correctCount++;
          removeClickListeners(); // 클릭 리스너 제거
          resolve(); // Promise 해결
        };
        image.addEventListener('click', clickHandler1);
        clickHandlers.push({ element: image, handler: clickHandler1 });
      } else if (image.alt === '짬뽕') {
        const clickHandler2 = () => {
          removeClickListeners(); // 클릭 리스너 제거
          resolve(); // Promise 해결
        };
        image.addEventListener('click', clickHandler2);
        clickHandlers.push({ element: image, handler: clickHandler2 });
      }
    });

    // 2초 타이머 설정
    const timer = setTimeout(() => {
      removeClickListeners(); // 클릭 리스너 제거
      resolve(); // Promise 해결
    }, 2000);

    // 클릭 리스너 제거 함수
    function removeClickListeners() {
      clearTimeout(timer); // 타이머 해제
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler);
      });
    }
  });
}

// 아무것도 생성하지 않음, bag_top_container에 클릭 이벤트 추가
function generateNoImages() {
  return new Promise((resolve) => {
    clearPreviousImages();
    const timer = setTimeout(() => {
      removeClickListener(); // 클릭 리스너 제거
      correctCount++;
      resolve(); // 2초 후 resolve
    }, 2000);

    function handleClick() {
      clearTimeout(timer); // 타이머 해제
      removeClickListener(); // 클릭 리스너 제거
      resolve();
    }

    bagTopContainer.addEventListener('click', handleClick);

    function removeClickListener() {
      bagTopContainer.removeEventListener('click', handleClick);
    }
  });
}

// 이전 게임의 이미지를 모두 삭제
function clearPreviousImages() {
  slots.forEach(slotId => {
    const slotElement = document.getElementById(slotId);
    if (slotElement) {
      const images = slotElement.querySelectorAll('img');
      images.forEach(image => {
        const newImage = image.cloneNode(true);
        image.replaceWith(newImage); // 이벤트 제거
      });
      slotElement.innerHTML = '';
    }
  });
}

// 랜덤 함수 호출을 분리
function callRandomFunction() {
  const functions = [
    () => generateJjajangImage(),
    () => generateJjajangAndJjambbongImages(),
    () => generateNoImages(),
  ];
  const randomFunction = functions[Math.floor(Math.random() * functions.length)];
  return randomFunction();
}

function callRandomFunctionsGameLoop() {
  let timer = totalTime; // 게임 시간 30초
  let timeElapsed = 0; // 경과 시간 추적
  let interval;

  // 타이머 시작
  interval = setInterval(() => {
    timeElapsed++;
    if (timeElapsed >= timer) {
      clearInterval(interval); // 타이머 종료
      console.log("Game Over - Time's up!");
      endGame(); // 시간 종료 시 게임 종료 처리
    }
  }, 1000);

  // 비동기 작업 반복
  async function iterate() {
    if (timeElapsed < timer) {
      try {
        await callRandomFunction();
        console.log(timeElapsed);
        if (timeElapsed < timer) {
          console.log('animation called');
          triggerBagTopAnimation(); // 애니메이션 호출
          iterate(); // 반복 호출
        }
      } catch (error) {
        console.error("비동기 작업 중 오류 발생:", error);
        clearInterval(interval);
      }
    }
  }

  // 게임 종료 처리
  async function endGame() {
    clearPreviousImages(); // 이전 이미지 삭제
    try {
      console.log(nickname);
      const result = await saveResult(nickname, correctCount); // 점수 저장
      console.log("API 호출 결과:", result);
    } catch (error) {
      console.error("API 호출 실패:", error);
      alert("점수 저장 중 오류가 발생했습니다.");
    }
  }

  // 게임 루프 시작
  iterate();
}

// 사용 예시
callRandomFunctionsGameLoop();
