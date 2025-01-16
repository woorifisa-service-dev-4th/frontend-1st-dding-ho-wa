import audio from '@/assets/audio/homeBGM.mp3';
import { HomeLayoutStyle } from './HomeLayout.style.js';
import HomeBody from './HomeBody.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { useState } from 'react';
import ModalContent from './ModalContent.jsx';
import { WarningScreen } from '../../components/WarningScreen/WarningScreen.jsx';
export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <audio autoPlay>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <WarningScreen/>

      <HomeLayoutStyle>
        <HomeBody openModal={openModal}/>
      </HomeLayoutStyle>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent/>
      </Modal>
    </>
  );
};
