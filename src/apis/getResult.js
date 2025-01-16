/**
 * 서버에서 랭킹 데이터를 가져오는 함수
 * @param {number} page - 가져올 페이지 번호
 * @param {number} limit - 페이지당 데이터 개수 (기본값: 10)
 * @returns {Promise<Object>} - 랭킹 데이터 객체
 */
export async function fetchRankings(page) {
  try {
    const response = await fetch(`/rank?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('❌ 데이터 가져오기 오류:', error.message);
    throw error;
  }
}
