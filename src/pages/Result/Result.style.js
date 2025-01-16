import styled from 'styled-components';


export const StyledContainerReceipt = styled.div`
  position : fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: 80%;
  padding: 50px;
  background-color: white;
  box-shadow: 0 4px 8px r gba(0, 0, 0, 0.2);
  z-index: 2;
`

export const StyledReceiptTopContent = styled.div`
  text-align: center;
  height: fit-content;
`

export const StyledResultButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  gap: 30px;
`

export const StyledScoreContainer = styled.div`
  padding: 20px;
  height: fit-content;
`
export const StyledPagenationButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
export const StyledRankedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
  align-items: center;
`