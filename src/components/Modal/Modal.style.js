import styled from 'styled-components';

export const StyledContainerOverlay = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  z-index:1;
`;

export const StyledContainerModal = styled.div`
  position : fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  padding: 50px;
  background-color: white;
  box-shadow: 0 4px 8px r gba(0, 0, 0, 0.2);
  z-index: 2;
`