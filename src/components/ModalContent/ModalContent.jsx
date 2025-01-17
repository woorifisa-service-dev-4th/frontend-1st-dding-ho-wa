import React, { useState } from 'react';
import { ModalContentStyle } from './ModalContent.style.js';
import { Button } from '../Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

const ModalContent = () => {
  const [inputValue, setInputValue] = useState('');
  // 데이터 저장 함수
  const navigate = useNavigate();

  const saveNickname = () => {
    if (!inputValue.trim()) {
      // 입력값이 비어 있거나 공백만 포함된 경우
      alert('이름을 입력해주세요!');
      navigate(0);
      return;
    }
    localStorage.setItem('nickname', inputValue.trim());
    navigate('/game'); // 다음 페이지로 이동
  };

  return (
    <ModalContentStyle>
      <div className="container_modal_content">
        <div className="text_description">게임 방법</div>
        <div>
          <p className="text_content_01">
            1. 시작하기를 누르자마자 철가방이 빠르게 닫힙니다.
          </p>
          <p className="text_content_02">
            2. 문제를 읽고 당신의 순발력을 테스트 해보세요.
          </p>
          <p className="text_content_03">
            3. 문제가 끝나면 당신의 점수와 순위가 나오게 됩니다.
          </p>
        </div>
        <div className="text_name_input">
          이름
          <input type="text" className="input_name" placeholder="당신의 이름은?" onChange={(event) => {
            setInputValue(event.target.value);
          }} />
        </div>
        <Button className="yellow" onClick={saveNickname}>시작하기</Button>

        <div className="text_team_name">제작 : 띵호와 팀</div>
      </div>
    </ModalContentStyle>
  );
};

export default ModalContent;
