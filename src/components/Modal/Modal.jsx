import React from 'react';
import { createPortal } from 'react-dom';
import { StyledContainerModal,  StyledContainerOverlay } from './Modal.style';


export const Modal = ({children, isOpen, onClose}) => {
  if(!isOpen) return null;
  return createPortal(
      <StyledContainerOverlay onClick={onClose}>
        <StyledContainerModal>
          {children}
        </StyledContainerModal>
      </StyledContainerOverlay>
      ,document.body
  )
}

export default Modal