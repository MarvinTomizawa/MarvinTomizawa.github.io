import * as React from "react";
import styled from "styled-components";

export interface RoundProgressProps {
  backgroundColor?: string;
  size?: number;
  progress: number;
  progressColor?: string;
  insideColor?: string;
}

interface StylizationProps {
  backgroundColor?: string;
  size?: string;
  progress?: number;
  progressColor?: string;
  insideColor?: string;
}

const RoundProgress: React.FunctionComponent<RoundProgressProps> = (props) => {
  return (
    <RoundProgressWrapper
      progress={75}
      size="3rem"
      insideColor="black"
      backgroundColor=""
    >
      <BackgroundCircle />
      <RoundProgressCircle progressColor="red">
        <LeftCircle />
        <RightCircle />
      </RoundProgressCircle>
      <InsideCircle>{props.children}</InsideCircle>
    </RoundProgressWrapper>
  );
};

export default RoundProgress;

const InsideCircle = styled.div`
  align-items: center;
  border-radius: 50%;
  display:flex;
  height: 70%;
  justify-content: center;
  left: 15%;
  position: absolute;
  top: 15%;
  width: 70%;
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const LeftCircle = styled(Circle)``;
const BackgroundCircle = styled(Circle)``;
const RightCircle = styled(Circle)`
  transform: rotate(180deg);
`;

const RoundProgressCircle = styled.div.attrs<StylizationProps>((prop) => ({
  progressColor: prop.progressColor || "blue",
}))<StylizationProps>`
  height: 100%;
  position: absolute;
  width: 100%;

  ${LeftCircle} {
    background-color: ${(prop) => prop.progressColor};
  }

  ${RightCircle} {
    background-color: ${(prop) => prop.progressColor};
  }
`;

const RoundProgressWrapper = styled.div.attrs<StylizationProps>((prop) => ({
  size: prop.size || "3rem",
  progress: prop.progress || 0,
  insideColor: prop.insideColor || "white",
  backgroundColor: prop.backgroundColor || "white",
}))<StylizationProps>`
  position: relative;
  width: ${(prop) => prop.size};
  height: ${(prop) => prop.size};

  ${RoundProgressCircle} {
    clip: rect(
      0,
      ${(prop) => prop.size},
      ${(prop) => prop.size},
      calc(${(prop) => prop.size} / 2)
    );

    ${(prop) =>
      (prop.progress || 0) > 50 && "clip: rect(auto, auto, auto, auto)"};
  }

  ${BackgroundCircle} {
    background-color: ${(prop) => prop.backgroundColor};
  }

  ${LeftCircle} {
    clip: rect(0, calc(${(prop) => prop.size} / 2), ${(prop) => prop.size}, 0);
    transform: rotate(calc(${(props) => props.progress} * 3.6deg));
  }

  ${RightCircle} {
    clip: rect(0, calc(${(prop) => prop.size} / 2), ${(prop) => prop.size}, 0);
    ${(props) => (props.progress || 0) < 50 && "display: none"}
  }

  ${InsideCircle} {
    background: ${(props) => props.insideColor};
  }
`;
