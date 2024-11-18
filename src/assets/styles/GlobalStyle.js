import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.color.black };
    background-color: ${({ theme }) => theme.color.lightGrey };
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
