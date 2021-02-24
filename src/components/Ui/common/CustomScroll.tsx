import * as React from "react";
import styled from "styled-components";
import { getTheme } from "../Variables";

interface CustomScrollProps {
  scrollColor?: string;
  scrollHoveredColor?: string;
  className?: string;
}

const CustomScrollBar: React.FunctionComponent<CustomScrollProps> = (props) => {
  return (
    <CustomScrollBarWrapper
      className={props.className}
      scrollColor={props.scrollColor}
      scrollHoveredColor={props.scrollHoveredColor}
    >
      {props.children}
    </CustomScrollBarWrapper>
  );
};

export default CustomScrollBar;

const CustomScrollBarWrapper = styled.div.attrs<CustomScrollProps>((props) => ({
  scrollColor: props.scrollColor,
  scrollHoveredColor: props.scrollHoveredColor || props.scrollColor,
}))<CustomScrollProps>`
  min-height: 100%;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.scrollColor || getTheme(props.theme).primaryDark};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) =>
      props.scrollHoveredColor || getTheme(props.theme).primary};
  }
`;
