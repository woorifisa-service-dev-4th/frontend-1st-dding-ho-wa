
/**
 * POST 요청으로 점수 저장
 * @param {string} nickname - 유저 닉네임
 * @param {number} score - 점수
 * @returns {Promise} - API 응답 Promise
 */
export async function saveResult(nickname, score) {
  try {
    const response = await fetch('/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: nickname,
        score: score,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data; // 필요한 경우 반환
  } catch (error) {
    console.error('Error:', error);
    throw error; // 에러를 호출한 함수로 전달
  }
}
