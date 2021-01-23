import * as React from "react";
export interface NotFoundProps {}

export interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    return (
      <main>
        <h1>NotFound</h1>
      </main>
    );
  }
}

export default NotFound;
