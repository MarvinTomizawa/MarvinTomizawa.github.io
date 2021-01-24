import * as React from "react";
import { ContentWrapper } from "../ContentStyle";

export interface HabilidadesProps {}

export interface HabilidadesState {}

class Habilidades extends React.Component<HabilidadesProps, HabilidadesState> {
  render() {
    return (
      <ContentWrapper>
        <h1>Habilidades</h1>
      </ContentWrapper>
    );
  }
}

export default Habilidades;
