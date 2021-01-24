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
    color: ${({theme}) => getPalette(theme).text}
  }

  `;

export default GlobalStyle;
