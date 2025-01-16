import { GlobalStyleContainer, GlobalStyles } from './GlobalStyle.style';

export const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalStyleContainer>{children}</GlobalStyleContainer>
    </>
  );
};
