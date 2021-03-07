import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as LightbulbOn } from "../../../assets/images/lightbulb-on.svg";
import { ReactComponent as LightbulbOff } from "../../../assets/images/lightbulb-off.svg";

export interface ThemeChangerProps {
  className?: string;
  toggleTheme: any;
  isDarkTheme: boolean;
}

const ThemeChanger: FunctionComponent<ThemeChangerProps> = (props) => {
  return (
    <Button className={props.className} onClick={props.toggleTheme}>
      {props.isDarkTheme ? <LightbulbOffIcon /> : <LightbulbOnIcon />}
    </Button>
  );
};
export default ThemeChanger;

const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  height: 100%;
  &:focus {
    outline: thin dotted;
  }

  &:hover {
    cursor: pointer;
  }
`;

const LightbulbOnIcon = styled(LightbulbOn)`
  width: 100%;
  height: 100%;
`;

const LightbulbOffIcon = styled(LightbulbOff)`
  width: 100%;
  height: 100%;
`;
