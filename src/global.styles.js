import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Fjalla One", sans-serif;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  * {
    box-sizing: border-box;
  }`;
