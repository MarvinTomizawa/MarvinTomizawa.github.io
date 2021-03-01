import * as React from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

export interface LogoProps {
  className?: string;
  t: Function;
}

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <div className={props.className}>
      <HeaderTitle>{props.t("header.logo.name")}</HeaderTitle>
    </div>
  );
};

export default withTranslation()(Logo);

const HeaderTitle = styled.h1`
  font-family: Pacifico, cursive;
  color: white;
  margin-block-start: 0px;
  text-shadow: 2px 2px black;
`;
