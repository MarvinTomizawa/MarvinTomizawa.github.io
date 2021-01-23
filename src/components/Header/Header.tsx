import * as React from "react";
import { Link } from "react-router-dom";
import RouteModel from "../../models/RouteModel";
import { HeaderTitle, HeaderWrapper, LinkList, LinkListItem } from "./HeaderStyles";

interface HeaderProps {
  routes: RouteModel[];
}

class Header extends React.PureComponent<HeaderProps> {
  mapLinks() {
    return this.props.routes
      .filter((route) => route.show)
      .map((route, index) => (
        <LinkListItem key={index}>
          <Link to={route.path}>{route.description}</Link>
        </LinkListItem>
      ));
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>Marvin Tomizawa</HeaderTitle>
        <nav>
          <LinkList>{this.mapLinks()}</LinkList>
        </nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
