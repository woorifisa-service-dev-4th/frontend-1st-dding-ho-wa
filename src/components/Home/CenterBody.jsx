import React from 'react';
import { CenterBodyStyle } from './CenterBody.style.js';
import bag from '@/assets/img/bag.svg';
import bagTop from '@/assets/img/bagTop.svg';
import { Button } from '../Button/Button.jsx';

const CenterBody = () => {
  return (
    <CenterBodyStyle>
      <img src={bag} alt="철가방" className="img_bag" />
      <div className="container_home_start_animation">
        <img src={bagTop} alt="철가방 뚜껑" className="img_bag_top" />
        <span className="text_home_01">띵호와</span>
        <Button className='yellow' >게임 설명</Button>
      </div>
    </CenterBodyStyle>
  );
};

export default CenterBody;
