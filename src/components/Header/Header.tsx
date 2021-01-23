import * as React from "react";

export interface HeaderProps {
  navigateTo: Function;
}

export interface HeaderState {}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  render() {
    return <header></header>;
  }
}

export default Header;
