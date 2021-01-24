import * as React from "react";
import { ContentWrapper } from "../ContentStyle";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <ContentWrapper>
        <h1>Home</h1>
      </ContentWrapper>
    );
  }
}

export default Home;
