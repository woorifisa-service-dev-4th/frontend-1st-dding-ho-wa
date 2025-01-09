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

// 슬롯 ID 배열

// 랜덤 이미지를 슬롯에 생성
function generateRandomImage() {
  // 랜덤 슬롯 선택
  const randomSlot = slots[Math.floor(Math.random() * slots.length)];

  // 랜덤 이미지 선택
  const randomImage = images[Math.floor(Math.random() * images.length)];

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
  console.log(slotRect.height, imageHeight, randomTop);
  // 기존 이미지 제거
  slotElement.innerHTML = '';

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

// 랜덤 이미지 생성 실행
generateRandomImage();
