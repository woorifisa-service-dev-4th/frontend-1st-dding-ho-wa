const progressBar = document.querySelector('.progress');
const timerText = document.getElementById('timer');
const increaseButton = document.getElementById('increase-time');
const decreaseButton = document.getElementById('decrease-time');

let totalTime = 20; // 초기 총 시간
let elapsed = 0; // 경과 시간
let interval = null; // 타이머 인터벌


export function updateProgressBar() {
  const progressPercentage = (elapsed / totalTime) * 100;
  progressBar.style.width = `${Math.max(0, Math.min(progressPercentage, 100))}%`;
}

export function resetProgressBar() {
  updateProgressBar();
}

export function startProgressBar() {
  clearInterval(interval); // 기존 타이머 종료
  interval = setInterval(() => {
    if (elapsed < totalTime) {
      elapsed++;
      updateProgressBar();
    } else {
      clearInterval(interval); // 시간이 끝났을 경우 종료
    }
  }, 1000); // 1초마다 업데이트
}
// 초기화 및 시작
