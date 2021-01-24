import React from "react";
import styled from "styled-components";

interface IUnderHoverEffect {
  primaryColor?: string;
  secondaryColor?: string;
  size?: string;
  transition?: string;
}

export const UnderHoverEffect: React.FunctionComponent<IUnderHoverEffect> = ({
  primaryColor = "red",
  secondaryColor = primaryColor,
  size = "2px",
  transition = ".3s",
  children,
}) => {
  const UnderHoverEffectComponent = styled.span`
    transform-origin: 0;
    background: linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%);
    width: 100%;
    height: ${size};
    transform: scaleX(0);      
    transition: ${transition};
  `;

  const UnderHoverEffectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    &:hover ${UnderHoverEffectComponent}{
      transform: scaleX(1);      
    }
  `;

  
  return (
    <UnderHoverEffectWrapper>
      {children}
      <UnderHoverEffectComponent />
    </UnderHoverEffectWrapper>
  );
};
