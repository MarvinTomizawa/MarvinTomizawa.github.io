import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export interface ThemeChangerProps {
  toggleTheme: any;
  isDarkTheme: boolean;
}

const ThemeChanger: React.FunctionComponent<ThemeChangerProps> = (props) => {
  return (
    <Button onClick={props.toggleTheme}>
      <p>light-Icon</p>
    </Button>
  );
};

export default ThemeChanger;
