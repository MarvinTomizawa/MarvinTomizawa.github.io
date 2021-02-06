import * as React from "react";
import styled from "styled-components";
import { getTheme } from "../Variables";

interface CustomScrollProps {
  leftScroll?: boolean;
  scrollColor?: string;
  scrollHoveredColor?: string;
  className?: string;
}

const CustomScrollBar: React.FunctionComponent<CustomScrollProps> = (props) => {
  return (
    <CustomScrollBarWrapper
      className={props.className}
      leftScroll={props.leftScroll}
      scrollColor={props.scrollColor}
      scrollHoveredColor={props.scrollHoveredColor}
    >
      <Content>{props.children}</Content>
    </CustomScrollBarWrapper>
  );
};

export default CustomScrollBar;

const Content = styled.div`
  direction: ltr;
  height: 100%;
  width: 100%;
`;

const CustomScrollBarWrapper = styled.div.attrs<CustomScrollProps>((props) => ({
  leftScroll: props.leftScroll || false,
  scrollColor: props.scrollColor,
  scrollHoveredColor: props.scrollHoveredColor || props.scrollColor,
}))<CustomScrollProps>`
  height: 100%;
  width: 100%;
  overflow: auto;

  ${(props) => props.leftScroll && "direction: rtl;"}

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
