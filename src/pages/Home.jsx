import audio from '@/assets/audio/homeBGM.mp3';
import { HomeLayoutStyle } from '../components/Home/HomeLayout.style.js';
import HomeBody from '../components/Home/HomeBody.jsx';
import Modal from '../components/Modal/Modal.jsx';
import { useState } from 'react';
import ModalContent from '../components/Home/ModalContent.jsx';
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
      <HomeLayoutStyle>
        <HomeBody openModal={openModal}/>
      </HomeLayoutStyle>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent/>
      </Modal>
    </>
  );
};
