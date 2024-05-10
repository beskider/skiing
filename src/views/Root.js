import { GlobalStyle } from "assets/styles/GlobalStyle";
import { MainTemplate } from "../components/templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResortsList } from "components/organisms/ResortsList/ResortsList";
import { AddResort } from "components/organisms/AddResort/AddResort";
import { ResortsProvider } from "providers/ResortsProvider";
import { NewsProvider } from "providers/NewsProvider";
import { Resort } from "components/organisms/Resort/Resort";

const Root = () => {

  return (
    <BrowserRouter basename="/skiing">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ResortsProvider>
          <NewsProvider>
            <MainTemplate>
              <Routes>
                <Route path="/" element={<ResortsList/>}/>
                <Route path="/resort/add" element={<AddResort/>}/>
                <Route path="/resort/:name" element={<Resort/>}/>
              </Routes>
            </MainTemplate>
          </NewsProvider>
        </ResortsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
