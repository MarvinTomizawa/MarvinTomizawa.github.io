import * as React from "react";
import { ContentWrapper } from "../ContentStyle";
export interface NotFoundProps {}

export interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    return (
      <ContentWrapper>
        <h1>NotFound</h1>
      </ContentWrapper>
    );
  }
}

export default NotFound;
