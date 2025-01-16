import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postResult } from '../apis/postResult';

export const useSaveResult = () => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const saveResult = async (nickname, score) => {
    try {
      const data = await postResult(nickname, score);
      setRes(data);

      if (data.success) {
        console.log('✅ 점수 저장 성공:', data);
        alert('점수가 성공적으로 저장되었습니다!');
        navigate('/result');
      } else {
        console.error('❌ 점수 저장 실패:', data.message);
        alert('점수 저장 중 문제가 발생했습니다.');
      }
    } catch (err) {
      console.error('❌ 서버 요청 실패:', err.message);
      setError(err);
      alert('서버 요청에 실패했습니다. 네트워크를 확인해주세요.');
    } finally {
    }
  };

  return { res, error, saveResult };
};
