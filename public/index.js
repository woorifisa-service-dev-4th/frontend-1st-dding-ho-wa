const nickname = '';

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('btn');
  const inputField = document.querySelector('.input_name');
  // 데이터 저장 함수
  const saveNickname = () => {
    const nickname = inputField.value.trim(); // 입력값 가져오기 및 공백 제거
    if (!nickname) {
      alert('이름을 입력해주세요!');
      return false; // 입력값이 없으면 동작 중지
    }
    localStorage.setItem('nickname', nickname);
    return true;
  };
  // 버튼 클릭 이벤트
  startButton.addEventListener('click', (event) => {
    if (!saveNickname()) {
      event.preventDefault();
    }
  });
  // 엔터키 입력 이벤트
  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 엔터키 동작 중단
      if (saveNickname()) {
        window.location.href = './game.html'; // 페이지 이동
      }
    }
  });
});
