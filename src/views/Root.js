import { GlobalStyle } from "assets/styles/GlobalStyle";
import { MainTemplate } from "../components/templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResortsList } from "components/organisms/ResortsList/ResortsList";
import { AddResort } from "components/organisms/AddResort/AddResort";
import { ResortsProvider } from "providers/ResortsProvider";
import { NewsProvider } from "providers/NewsProvider";

const Root = () => {

  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ResortsProvider>
          <NewsProvider>
            <MainTemplate>
              <Routes>
                <Route path="/" element={<ResortsList/>}/>
                <Route path="/add-resort" element={<AddResort/>}/>
              </Routes>
            </MainTemplate>
          </NewsProvider>
        </ResortsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
