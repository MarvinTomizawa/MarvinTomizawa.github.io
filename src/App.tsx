import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Ui/GlobalStyle";
import { colorPalette } from "./components/Ui/Variables";
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

const App: React.FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  i18n.changeLanguage("pt");

  const routes: RouteModel[] = [
    new RouteModel("/", t("header.link.home"), Home, true),
    new RouteModel("/about", t("header.link.about"), About),
    new RouteModel("/experience", t("header.link.experience"), Experience),
    new RouteModel("/skills", t("header.link.skills"), Skills),
    new RouteModel("/contact", t("header.link.contact"), Contact),
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

  return (
    <ThemeProvider theme={{ ...colorPalette }}>
      <GlobalStyle></GlobalStyle>

      <Router>
        <Header routes={routes} />
        <Switch>{mapRoutes()}</Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
