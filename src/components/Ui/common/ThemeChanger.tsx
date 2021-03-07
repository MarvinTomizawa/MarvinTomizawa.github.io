import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../../assets/images/header/sun.svg";
import { ReactComponent as MoonIcon } from "../../../assets/images/header/moon.svg";
import { getTheme } from "../Variables";

export interface ThemeChangerProps {
  className?: string;
  toggleTheme: any;
  isDarkTheme: boolean;
}

interface ThemeChangerStyleProps {
  isdarktheme: string;
}

const ThemeChanger: FunctionComponent<ThemeChangerProps> = (props) => {
  return (
    <Button className={props.className} onClick={props.toggleTheme}>
      <StyledOnIcon isdarktheme={String(props.isDarkTheme)} />
      <StyledOffIcon isdarktheme={String(props.isDarkTheme)} />
    </Button>
  );
};
export default ThemeChanger;

const Button = styled.button`
  display: flex;
  background-color: white;
  border: none;
  border-radius: 10px;
  height: 100%;
  &:focus {
    outline: thin dotted;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledOnIcon = styled(SunIcon).attrs<ThemeChangerStyleProps>((props) => ({
  isdarktheme: props.isdarktheme,
}))<ThemeChangerStyleProps>`
  color: ${(props) => (props.isdarktheme === "true" ? "black" : "orangered")};
  height: 1rem;
  width: 1rem;

  margin: 0.1rem 0.45rem;
  margin-right: 0.1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 1.25rem;
    width: 1.25rem;

    margin: 0.15rem 0.75rem;
    margin-right: 0.25rem;
  }
`;

const StyledOffIcon = styled(MoonIcon).attrs<ThemeChangerStyleProps>(
  (props) => ({
    isdarktheme: props.isdarktheme,
  })
)<ThemeChangerStyleProps>`
  color: ${(props) => (props.isdarktheme === "true" ? "blueviolet" : "black")};
  height: 1rem;
  width: 1rem;

  margin: 0.15rem 0.45rem;
  margin-left: 0.1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 1.25rem;
    width: 1.25rem;

    margin: 0.15rem 0.75rem;
    margin-left: 0.25rem;
  }
`;
