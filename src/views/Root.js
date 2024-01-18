import { GlobalStyle } from "assets/styles/GlobalStyle";
import { MainTemplate } from "../components/templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResortsList } from "components/organisms/ResortsList/ResortsList";
import { AddResort } from "components/organisms/AddResort/AddResort";

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      
        <MainTemplate>
          <Routes>
            <Route path="/" element={<ResortsList/>}/>
            <Route path="/add-resort" element={<AddResort/>}/>
          </Routes>
        </MainTemplate>
      
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
