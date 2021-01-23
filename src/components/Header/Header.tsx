import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, LinkList, LinkListItem } from './HeaderStyles'

class Header extends React.PureComponent{
  render() {
    return (
      <HeaderWrapper>
        <nav>
          <LinkList>
            <LinkListItem>
              <Link to="/">Home</Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/sobre">Sobre</Link>
            </LinkListItem>
          </LinkList>
        </nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
