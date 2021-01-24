import * as React from "react";
import { ContentWrapper } from "../ContentStyle";

export interface SobreProps {}

export interface SobreState {}

class Sobre extends React.Component<SobreProps, SobreState> {
  render() {
    return (
      <ContentWrapper>
        <h1>Sobre</h1>
      </ContentWrapper>
    );
  }
}

export default Sobre;
