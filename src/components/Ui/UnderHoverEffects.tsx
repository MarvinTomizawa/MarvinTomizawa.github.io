import React from "react";
import styled from "styled-components";

const UnderHoverEffectComponent = styled.span.attrs<
  UnderHoverEffectProps,
  UnderHoverEffectProps
>((props) => ({
  primaryColor: props.primaryColor || "red",
  secondaryColor: props.secondaryColor || props.primaryColor || "red",
  size: props.size || "2px",
  transition: props.transition || ".5s",
}))`
  transform-origin: 0;
  background: linear-gradient(
    90deg,
    ${(props) => props.primaryColor} 0%,
    ${(props) => props.secondaryColor} 100%
  );
  width: 100%;
  height: ${(props) => props.size};
  transform: scaleX(0);
  transition: ${(props) => props.transition};
`;

const UnderHoverEffectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover ${UnderHoverEffectComponent} {
    transform: scaleX(1);
  }
`;

interface UnderHoverEffectProps {
  primaryColor?: string;
  secondaryColor?: string;
  size?: string;
  transition?: string;
}

class UnderHoverEffect extends React.Component<UnderHoverEffectProps> {
  render() {
    return (
      <UnderHoverEffectWrapper>
        {this.props.children}
        <UnderHoverEffectComponent
          primaryColor={this.props.primaryColor}
          secondaryColor={this.props.secondaryColor}
          size={this.props.size}
          transition={this.props.transition}
        />
      </UnderHoverEffectWrapper>
    );
  }
}

export default UnderHoverEffect;
