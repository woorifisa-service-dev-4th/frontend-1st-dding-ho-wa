import React from 'react';
import { ModalContentStyle } from './ModalContent.style.js';

const ModalContent = () => {
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
          <input
            type="text"
            className="input_name"
            placeholder="당신의 이름은?"
          />
        </div>
        <a href="./game.html">
          <button id="btn" className="btn_game_start">
            시작하기
          </button>
        </a>
        <div className="text_team_name">제작 : 띵호와 팀</div>
      </div>
      </ModalContentStyle>
    );
};

export default ModalContent;
