import { GlobalStyleContainer, GlobalStyles } from './GlobalStyle.stye';

export const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalStyleContainer>{children}</GlobalStyleContainer>
    </>
  );
};
