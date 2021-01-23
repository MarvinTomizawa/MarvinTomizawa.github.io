import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Ui/GlobalStyle";
import { colorPalette } from "./components/Ui/Variables";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { placeholder: [] };
  }
  render() {
    return (
      <ThemeProvider theme={{...colorPalette}}>
        <GlobalStyle></GlobalStyle>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobre" exact={true} component={Sobre} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
