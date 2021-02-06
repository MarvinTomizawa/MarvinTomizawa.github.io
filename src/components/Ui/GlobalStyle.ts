import { createGlobalStyle } from "styled-components";
import { getTheme } from "./Variables";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  
  body {
    background-color: ${({ theme }) => getTheme(theme).body};
    color: ${({ theme }) => getTheme(theme).text};
    height: 100vh;
    width: 100vw;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root{
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  `;

export default GlobalStyle;
