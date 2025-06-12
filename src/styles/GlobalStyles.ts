import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  html {
    background-color: ${props => props.theme.primaryBg};
    transition: background-color 0.5s ease;
  }
`;