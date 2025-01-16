import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledWarningBackground = styled.div`
  position: relative;
  @media (min-width: 1090px) {
    display: none;
  }
  background-color: ${colors.white};
`;

export const StyledWarningText = styled.div`
  @media (max-width: 1089px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-size: 2rem;
    color: #000000;
  }
`;
