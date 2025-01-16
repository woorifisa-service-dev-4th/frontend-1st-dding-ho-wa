import audio from '@/assets/audio/homeBGM.mp3';
import { HomeLayoutStyle } from '../components/Home/HomeLayout.style.js';
import HomeBody from '../components/Home/HomeBody.jsx';
export const Home = () => {
  return (
    <>
      <audio autoPlay>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <HomeLayoutStyle>
        <HomeBody/>
      </HomeLayoutStyle>
    </>
  );
};
