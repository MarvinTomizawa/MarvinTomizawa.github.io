import { createGlobalStyle } from "styled-components";
import { getPalette } from "./Variables"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* font-family: "Montserrat", sans-serif; */
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  
  body {
    background-color: ${({theme}) => getPalette(theme).body};
    color: ${({theme}) => getPalette(theme).text};
    height: 100vh;
    width: 100vw;
  }

  #root{
    height: 100%;
    width: 100%;
  }
  `;

export default GlobalStyle;
