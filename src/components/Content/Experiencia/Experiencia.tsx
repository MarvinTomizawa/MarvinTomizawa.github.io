import * as React from "react";
import { ContentWrapper } from "../ContentStyle";

export interface ExperienciaProps {}

export interface ExperienciaState {}

class Experiencia extends React.Component<ExperienciaProps, ExperienciaState> {
  render() {
    return (
      <ContentWrapper>
        <h1>Experiencia</h1>
      </ContentWrapper>
    );
  }
}

export default Experiencia;
