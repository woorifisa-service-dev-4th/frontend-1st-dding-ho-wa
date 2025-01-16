import { LeftBodyStyle } from './LeftBody.style.js';
import left_light from '@/assets/img/home/left_light.svg';
import left_dragon from '@/assets/img/home/left_dragon.svg';
const LeftBody = () => {
    return (
      <LeftBodyStyle>
        <img
          src={left_light}
          alt="왼쪽 전등"
          className="img_left_light"
        />
        <img
          src={left_dragon}
          alt="왼쪽 용"
          className="img_left_dragon"
        />
      </LeftBodyStyle>
    );
};

export default LeftBody;
