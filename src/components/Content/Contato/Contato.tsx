import * as React from "react";
import { ContentWrapper } from "../ContentStyle";

export interface ContatoProps {}

export interface ContatoState {}

class Contato extends React.Component<ContatoProps, ContatoState> {
  render() {
    return (
      <ContentWrapper>
        <h1>Contato</h1>
      </ContentWrapper>
    );
  }
}

export default Contato;
