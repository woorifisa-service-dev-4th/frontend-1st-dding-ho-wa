import Modal from "../components/Modal/Modal";
import audio from '@/assets/audio/homeBGM.mp3';
import { HomeLayoutStyle } from '../components/Home/HomeLayout.style.js';
import LeftBody from '../components/Home/LeftBody.jsx';

export const Home = () => {
  return (
    <>
      <audio autoPlay>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <HomeLayoutStyle>
        <LeftBody/>
      </HomeLayoutStyle>
    </>
  );
};
