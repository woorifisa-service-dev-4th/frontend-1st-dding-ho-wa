import styled from 'styled-components';

export const StyledTimerContainer = styled.div`
  position: absolute;
  top: 94%;
  left: 20%;
  width: 80%;
  max-width: 70%;
  z-index: 4;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const StyledBellImg = styled.img`
  width: 30px;
  height: 30px;
  padding-bottom: 3px;
`;

export const StyledProgressBar = styled.div`
  width: inherit;
  background: #ddd;
  border-radius: 15px;
  overflow: hidden;
  height: 20px;
`;

export const StyledProgress = styled.div`
  background: #fcc338;
  height: 100%;
  width: ${(props) => props.$width};
  transition: width 1s linear;
`;
