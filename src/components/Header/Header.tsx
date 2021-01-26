import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "styled-components";
import RouteModel from "../../models/Router/RouteModel";
import UnderHoverEffect from "../Ui/UnderHoverEffects";
import { IColorPalette } from "../Ui/Variables";

import {
  HeaderLanguagePicker,
  HeaderTitle,
  HeaderWrapper,
  LinkList,
  LinkListItem,
} from "./HeaderStyles";

interface HeaderProps {
  routes: RouteModel[];
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const theme: IColorPalette = React.useContext<IColorPalette>(ThemeContext);
  const { t } = useTranslation();
  const pathname = useLocation().pathname;

  const mapLinks = (actualPath: string) => {
    return props.routes
      .filter((route) => route.show)
      .map((route, index) => (
        <LinkListItem key={index}>
          <UnderHoverEffect
            primaryColor={theme.primaryDark}
            secondaryColor={theme.secondaryLight}
            keepActive={route.path === actualPath}
          >
            <Link to={route.path}>{route.description}</Link>
          </UnderHoverEffect>
        </LinkListItem>
      ));
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>{t("header.logo.name")}</HeaderTitle>
      <nav>
        <LinkList>{mapLinks(pathname)}</LinkList>
      </nav>
      <HeaderLanguagePicker></HeaderLanguagePicker>
    </HeaderWrapper>
  );
};

export default Header;
