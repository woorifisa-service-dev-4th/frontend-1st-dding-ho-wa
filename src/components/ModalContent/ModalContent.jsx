import React,{useState} from 'react';
import { ModalContentStyle } from './ModalContent.style.js';
import { Button } from '../Button/Button.jsx';

const ModalContent = () => {
  const [inputValue, setInputValue] = useState("");
  // 데이터 저장 함수
  const saveNickname = () => {
    if (!inputValue) {
      alert('이름을 입력해주세요!');
      return false; // 입력값이 없으면 동작 중지
    }
    localStorage.setItem('nickname', inputValue);
    console.log(localStorage.getItem('nickname'));
    return true;
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
          <input type="text" className="input_name" placeholder="당신의 이름은?"   onChange={(event) => {
            setInputValue(event.target.value);
          }}/>
        </div>
        <a href={'/game'}>
          <Button className='yellow' onClick={saveNickname}>시작하기</Button>
        </a>
        <div className="text_team_name">제작 : 띵호와 팀</div>
      </div>
      </ModalContentStyle>
    );
};

export default ModalContent;
