import React from 'react';
import { CenterBodyStyle } from './CenterBody.style.js';
import bag from '@/assets/img/bag.svg';
import bagTop from '@/assets/img/bagTop.svg';

const CenterBody = () => {
  return (
    <CenterBodyStyle>
      <img src={bag} alt="철가방" className="img_bag" />
      <div className="container_home_start_animation">
        <img src={bagTop} alt="철가방 뚜껑" className="img_bag_top" />
        <span className="text_home_01">띵호와</span>
        <label htmlFor="show-modal" className="start_button_home">게임 설명</label>
      </div>
    </CenterBodyStyle>
  );
};

export default CenterBody;
