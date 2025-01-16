import rightDragon from '@/assets/img/home/right.webp';
import { RightBodyStyle } from './RightBody.style.js';

const RightBody = () => {
  return (
    <RightBodyStyle>
      <img src={rightDragon} alt="오른쪽  용" className="img_right" />
    </RightBodyStyle>
  );
};

export default RightBody;
