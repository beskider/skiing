import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;    
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  a, button {
    font-family: 'Roboto', sans-serif;
  }
`;
