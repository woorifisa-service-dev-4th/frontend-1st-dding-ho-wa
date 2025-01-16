import React from 'react';
import { createPortal } from 'react-dom';
import { StyledContainerModal,  StyledContainerOverlay } from './Modal.style';


export const Modal = ({children, isOpen, onClose}) => {
  if(!isOpen) return null;
  const handleOverlayClick = (e) => {
    if (onClose) {
      onClose(e); // onClose가 전달되었을 때만 호출
    }
  };
  return createPortal(
      <StyledContainerOverlay onClick={handleOverlayClick}>
        <StyledContainerModal onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledContainerModal>
      </StyledContainerOverlay>
      ,document.body
  )
}

export default Modal