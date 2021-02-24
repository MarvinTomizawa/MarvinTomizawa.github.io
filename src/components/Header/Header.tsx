import * as React from "react";
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";
import { withTheme } from "styled-components";
import RouteModel from "../../models/Router/RouteModel";
import { withMobile } from "../Hooks/useMobile";
import UnderHoverEffect from "../Ui/common/UnderHoverEffects";
import { ICustomTheme } from "../Ui/Variables";

import {
  HeaderConfigButtons,
  HeaderLanguagePicker,
  HeaderLogo,
  HeaderThemeChanger,
  HeaderWrapper,
  LinkList,
  LinkListItem,
} from "./HeaderStyles";

interface HeaderProps {
  routes: RouteModel[];
  location?: any;
  t: Function;
  i18n?: any;
  className?: string;
  theme?: ICustomTheme;
  isMobile?: boolean;
  toggleTheme: any;
  isDarkTheme: boolean;
}

interface HeaderState {
  pathName: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLogo />
        <HeaderConfigButtons>
          <HeaderThemeChanger
            isDarkTheme={this.props.isDarkTheme}
            toggleTheme={this.props.toggleTheme}
          />
          <HeaderLanguagePicker showOnlyIcons={this.props.isMobile || false} />
        </HeaderConfigButtons>
        <nav>
          <LinkList>{this.mapLinks(this.props.location.pathname)}</LinkList>
        </nav>
      </HeaderWrapper>
    );
  }

  mapLinks(actualPath: string) {
    return this.props.routes
      .filter((route) => route.show)
      .map((route, index) => (
        <LinkListItem key={index}>
          <UnderHoverEffect
            primaryColor={this.props.theme?.primaryDark}
            secondaryColor={this.props.theme?.secondaryLight}
            keepActive={route.path === actualPath}
          >
            <Link to={route.path}>{route.description}</Link>
          </UnderHoverEffect>
        </LinkListItem>
      ));
  }
}

export default withTranslation()(withRouter(withMobile(withTheme(Header))));
