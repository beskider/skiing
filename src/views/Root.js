import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyle";

import { MainTemplate } from "../components/templates/MainTemplate/MainTemplate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ResortsList } from "components/organisms/ResortsList/ResortsList";
import { Map } from "components/organisms/Map/Map";
import { AddResort } from "components/organisms/AddResort/AddResort";
import { ResortsProvider } from "providers/ResortsProvider";
import { NewsProvider } from "providers/NewsProvider";
import { Resort } from "components/organisms/Resort/Resort";
import { Webcams } from 'components/organisms/Webcams/Webcams';

export const Root = () => {
  return (
    <BrowserRouter basename="/skiing">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ResortsProvider>
          <NewsProvider>
            <MainTemplate>
              <Routes>
                <Route path="/" element={<Navigate to="/map" replace={true}/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/resorts" element={<ResortsList/>}/>
                <Route path="/resort/add" element={<AddResort/>}/>
                <Route path="/resort/:name" element={<Resort/>}/>
                <Route path="/webcams" element={<Webcams/>}/>
              </Routes>
            </MainTemplate>
          </NewsProvider>
        </ResortsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
