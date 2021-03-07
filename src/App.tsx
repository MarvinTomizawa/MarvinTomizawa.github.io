import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Ui/GlobalStyle";
import { darkColorPalette, lightColorPalette } from "./components/Ui/Variables";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useDarkTheme } from "./components/Hooks/useDarkMode";
import CustomScrollBar from "./components/Ui/common/CustomScroll";
import { routes } from "./configurations/Routes/Routes";
import Header from "./components/Header/Header";

const App: React.FunctionComponent = () => {
  const mapRoutes = () => {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  };

  const [isDarkTheme, toggleTheme] = useDarkTheme();
  const theme = isDarkTheme
    ? { ...darkColorPalette }
    : { ...lightColorPalette };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>

      <Router>
        <CustomScrollBar>
          <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <Switch>{mapRoutes()}</Switch>
          <Footer />
        </CustomScrollBar>
      </Router>
    </ThemeProvider>
  );
};

export default App;
