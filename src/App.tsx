import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Ui/GlobalStyle";
import { darkColorPalette, lightColorPalette } from "./components/Ui/Variables";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Content/About/About";
import Home from "./components/Content/Home/Home";
import NotFound from "./components/Content/NotFound/NotFound";
import Header from "./components/Header/Header";
import RouteModel from "./models/Router/RouteModel";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Content/Skills/Skills";
import Experience from "./components/Content/Experience/Experience";
import Contact from "./components/Content/Contact/Contact";
import { useTranslation } from "react-i18next";
import { useDarkTheme } from "./components/Hooks/useDarkMode";
import Playground from "./components/Content/Playground/Playground";
import CustomScrollBar from "./components/Ui/common/CustomScroll";

const App: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const routes: RouteModel[] = [
    new RouteModel("/", t("header.link.home"), Home, true),
    new RouteModel("/about", t("header.link.about"), About),
    new RouteModel("/experience", t("header.link.experience"), Experience),
    new RouteModel("/skills", t("header.link.skills"), Skills),
    new RouteModel("/contact", t("header.link.contact"), Contact),
    new RouteModel("/playground", "", Playground, false, false),
    new RouteModel("*", t("header.link.notFound"), NotFound, false, false),
  ];

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
          <Header
            isDarkTheme={isDarkTheme}
            toggleTheme={toggleTheme}
            routes={routes}
          />
          <Switch>{mapRoutes()}</Switch>
          <Footer />
        </CustomScrollBar>
      </Router>
    </ThemeProvider>
  );
};

export default App;
