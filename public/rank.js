const rankListElement = document.querySelector('.rank_list');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1;
const limit = 10;

const renderRanking = (ranks, page) => {
  rankListElement.innerHTML = ranks
    .map((player, index) => {
      const overallIndex = (page - 1) * limit + index + 1;
      const rankElement = document.createElement('div');
      rankElement.classList.add('rank');
      rankElement.dataset.rank = overallIndex;

      const rankNum = document.createElement('div');
      rankNum.classList.add('rank_num');
      rankNum.textContent = `${overallIndex}등`;

      const rankName = document.createElement('div');
      rankName.classList.add('rank_name');
      rankName.textContent = player.nickname;

      const rankScore = document.createElement('div');
      rankScore.classList.add('rank_score');
      rankScore.textContent = `${player.score}점`;

      rankElement.append(rankNum, rankName, rankScore);
      rankElement.style.display = 'flex';
      rankElement.style.marginBottom = '10px';

      return rankElement.outerHTML;
    })
    .join('');
};

const updateButtons = (page, totalPages) => {
  prevButton.disabled = page <= 1;
  nextButton.disabled = page >= totalPages;
};

const fetchRankingData = async (page) => {
  try {
    const response = await fetch(`/rank?page=${page}`);
    const data = await response.json();
    if (data.success) {
      renderRanking(data.data, page);
      updateButtons(page, data.totalPages);
    } else {
      alert('데이터를 불러오는데 실패했습니다.');
    }
  } catch (error) {
    console.error('데이터 불러오기 오류:', error);
  }
};

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    fetchRankingData(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  currentPage += 1;
  fetchRankingData(currentPage);
});

fetchRankingData(currentPage);
