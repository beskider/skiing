import { GlobalStyle } from "assets/styles/GlobalStyle";
import { MainTemplate } from "../components/templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate />
    </ThemeProvider>
  );
};

export default Root;
