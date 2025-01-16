import React from 'react';
import { ContainerModal, ContainerOverlay } from './Modal.style';


export const Modal = ({children}) => {
  return (
      <ContainerOverlay>
        <ContainerModal>
          {children}
        </ContainerModal>
      </ContainerOverlay>
  )
}

export default Modal