let timer;
let timeRemaining = 60; // 타이머 설정 시간 (60초)
let isRunning = false;
let progressBar = document.getElementById('progress-bar');
let timeDisplay = document.getElementById('time-display');
let startButton = document.getElementById('start-button');

function startTimer() {
    if (isRunning) return; // 타이머가 이미 실행 중이면 아무것도 안 함

    isRunning = true;
    startButton.textContent = '정지';

    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            isRunning = false;
            startButton.textContent = '시작';
            return;
        }

        timeRemaining--;
        updateUI();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = '시작';
}

function updateUI() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

    let progress = (60 - timeRemaining) / 60 * 100;
    progressBar.style.width = `${progress}%`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

startButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        timeRemaining = 60; // 다시 60초로 초기화
        updateUI();
        startTimer();
    }
});

// 초기 UI 설정
updateUI();
