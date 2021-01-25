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

class App extends React.Component {
  private routes: RouteModel[] = [
    new RouteModel("/", "Home", Home, true),
    new RouteModel("/sobre", "Sobre", About),
    new RouteModel("/experiencia", "Experiencia", Experience),
    new RouteModel("/habilidades", "Habildades", Skills),
    new RouteModel("/contato", "Contato", Contact),
    new RouteModel("*", "NotFound", NotFound, false, false),
  ];

  render() {
    return (
      <ThemeProvider theme={{ ...colorPalette }}>
        <GlobalStyle></GlobalStyle>

        <Router>
          <Header routes={this.routes} />
          <Switch>{this.mapRoutes()}</Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    );
  }

  mapRoutes() {
    return this.routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  }
}

export default App;
