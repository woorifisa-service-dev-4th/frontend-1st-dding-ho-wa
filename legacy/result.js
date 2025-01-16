document.addEventListener('DOMContentLoaded', () => {
  const scoreElement = document.querySelector('.text_score');
  const savedScore = localStorage.getItem('score');

  if (savedScore) {
    scoreElement.textContent = savedScore;
  } else {
    scoreElement.textContent = '0';
  }
});
