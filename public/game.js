// 이미지 배열 (랜덤으로 선택할 이미지)

const images = [
  { src: 'img/짜장면.png', alt: '짜장면' },
  { src: 'img/짬뽕.png', alt: '짬뽕' },
  { src: 'img/라멘.png', alt: '라멘' },
];
const slots = ['slot1', 'slot2', 'slot3'];
// 이미지와 컨테이너 참조
const imgBagTop = document.querySelector('.img_bagTop');
const bagTopContainer = document.querySelector('.bag_top_container');

// 이미지 크기를 가져와 컨테이너 크기 설정
function setContainerSize() {
  console.log('setContainerSize');
  const imgRect = imgBagTop.getBoundingClientRect(); // 이미지 크기 가져오기
  bagTopContainer.style.width = `${imgRect.width}px`;
  bagTopContainer.style.height = `${imgRect.height}px`;
  console.log(imgRect.height, 'px');
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
let correctCount = 0;

// 짜장면 이미지만 사용하여 슬롯에 1개의 이미지를 생성
function generateJjajangImage() {
  return new Promise((resolve) => {
    clearPreviousImages();
    const jjajangImage = images.filter(img => img.alt === '짜장면');
    generateRandomImages(jjajangImage, 1);
    console.log('짜장게임');
    // 생성된 이미지에 클릭 이벤트 추가
    const slotImages = document.querySelectorAll('#slot1 img, #slot2 img, #slot3 img');
    slotImages.forEach(image => {
      if (image.alt === '짜장면') {
        image.addEventListener('click', function clickHandler3() {
          correctCount++;
          console.log('정답! 현재 정답 수:', correctCount);
          image.removeEventListener('click', clickHandler3);
          resolve();
        });
      }
    });
  });
}

// 짜장면과 짬뽕 이미지를 사용하여 슬롯에 2개의 이미지를 랜덤 생성
function generateJjajangAndJjambbongImages() {
  return new Promise((resolve) => {
    clearPreviousImages();
    console.log('짜장 짬뽕게임');
    const selectedImages = [images.find(img => img.alt === '짜장면'), images.find(img => img.alt === '짬뽕')];
    generatePairImages();

    // 생성된 이미지에 클릭 이벤트 추가
    const slotImages = document.querySelectorAll('#slot1 img, #slot2 img, #slot3 img');
    slotImages.forEach(image => {
      if (image.alt === '짜장면') {
        image.addEventListener('click', function clickHandler1() {
          correctCount++;
          console.log('정답! 현재 정답 수:', correctCount);
          image.removeEventListener('click', clickHandler1);
          resolve();
        });
      } else if (image.alt === '짬뽕') {
        image.addEventListener('click', function clickHandler2() {
          correctCount--;
          console.log('오답! 현재 정답 수:', correctCount);
          image.removeEventListener('click', clickHandler2);
          resolve();
        });
      }
    });
  });
}

// 아무것도 생성하지 않음, bag_top_container에 클릭 이벤트 추가
function generateNoImages() {
  return new Promise((resolve) => {
    clearPreviousImages();
    console.log('노이미지 게임');
    const bagTopContainer = document.querySelector('.bag_top_container');

    if (bagTopContainer) {
      bagTopContainer.addEventListener('click', function handleClick() {
        console.log('오답 처리! 클릭되었습니다.');
        bagTopContainer.removeEventListener('click', handleClick); // 이벤트 리스너 제거
        resolve();
      });
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

// gameCount가 0이 될 때까지 랜덤 함수 호출
function callRandomFunctionsGameLoop() {
  let gameCount = 10;

  function iterate() {
    console.log('iterate called');
    if (gameCount >= 0) {
      callRandomFunction().then(() => {
        gameCount--;
        console.log(gameCount);
        iterate();
      });
    } else {
      clearPreviousImages();
      //TODO '/result'호출 후 종료
      console.log('exit');
    }
  }
  if(gameCount===10)iterate();
}

// 사용 예시
callRandomFunctionsGameLoop();