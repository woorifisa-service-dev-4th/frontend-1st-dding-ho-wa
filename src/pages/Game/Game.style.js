import styled, { css, keyframes } from 'styled-components';

export const StyledBackground = styled.div`
  display: none;

  @media (min-width: 1090px) {
    display: block;
  }
`;

export const StyledBag = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  filter: drop-shadow(12px 17px 5.2px rgba(0, 0, 0, 0.25));
`;

const bagTopDown = keyframes`
  from {
    top: -30%;
  }
  to {
    /*top: -10%;*/
    top: 54%;
  }
`;

export const StyledBagTop = styled.img`
  position: absolute;
  top: -30%;
  left: 50%;
  will-change: transform, opacity;
  transform: translate(-50%, -50%) translateZ(0);
  width: 60vw;
  animation: ${({ $isAnimating }) =>
    $isAnimating
      ? css`
          ${bagTopDown} 1s linear forwards
        `
      : 'none'};
  z-index: 2;
`;

export const StyledBagTopContainer = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  will-change: transform, opacity;
  transform: translate(-50%, -50%) translateZ(0);
  width: 60vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyledSlot = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 1.4%;
  width: 94.5%;
  height: 90%;
  margin: 10px;
  display: flex;
  z-index: 1;
`;
