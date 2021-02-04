import * as React from "react";
import styled from "styled-components";

export interface RoundProgressProps {
  backgroundColor?: string;
  size?: string;
  progress?: number;
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
      progress={props.progress}
      size={props.size}
      insideColor={props.insideColor}
      backgroundColor={props.backgroundColor}
    >
      <BackgroundCircle />
      <RoundProgressCircle progressColor={props.progressColor}>
        <LeftCircle />
        <RightCircle />
      </RoundProgressCircle>
      <InsideCircle>{props.children}</InsideCircle>
      <ProgressCircleEffect size={props.size} />
    </RoundProgressWrapper>
  );
};

export default RoundProgress;

const InsideCircle = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
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

const TopProgressCircle = styled(Circle).attrs<StylizationProps>((props) => ({
  size: props.size || "3rem",
}))<StylizationProps>`
  box-shadow: inset 0rem calc((${(props) => props.size} / 6) * -1)
    calc((${(props) => props.size} / 10))
    calc((${(props) => props.size} / 10) * -1) black;
`;

const BottomProgressCircle = styled(Circle).attrs<StylizationProps>(
  (props) => ({
    size: props.size || "3rem",
  })
)<StylizationProps>`
  width: 85%;
  height: 85%;
  top: 7.5%;
  left: 7.5%;
  box-shadow: inset 0rem calc((${(props) => props.size} / 10))
      calc((${(props) => props.size} / 10))
      calc((${(props) => props.size} / 10) * -1) black,
    inset 0rem calc((${(props) => props.size} / 10) * -1)
      calc((${(props) => props.size} / 10))
      calc((${(props) => props.size} / 8) * -1) white;
`;

const ProgressCircleEffect = ({ size }: { size?: string }) => {
  return (
    <div>
      <TopProgressCircle size={size} />
      <BottomProgressCircle size={size} />
    </div>
  );
};

const LeftCircle = styled(Circle)`
  background: blue;
`;
const BackgroundCircle = styled(Circle)``;
const RightCircle = styled(Circle)``;

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
  progress: prop.progress || 100,
  insideColor: prop.insideColor || "black",
  backgroundColor: prop.backgroundColor || "white",
}))<StylizationProps>`
  position: relative;
  width: ${(prop) => prop.size};
  height: ${(prop) => prop.size};

  ${RoundProgressCircle} {
    clip: rect(0, calc(${(prop) => prop.size} / 2), ${(prop) => prop.size}, 0);

    ${(prop) =>
      (prop.progress || 0) > 50 && "clip: rect(auto, auto, auto, auto)"};
  }

  ${BackgroundCircle} {
    background-color: ${(prop) => prop.backgroundColor};
  }

  ${LeftCircle} {
    clip: rect(0, calc(${(prop) => prop.size} / 2), ${(prop) => prop.size}, 0);
    ${(props) => (props.progress || 0) < 50 && "display: none"}
  }

  ${RightCircle} {
    clip: rect(0, calc(${(prop) => prop.size} / 2), ${(prop) => prop.size}, 0);
    transform: rotate(calc(180deg - (${(props) => props.progress} * -3.6deg)));
  }

  ${InsideCircle} {
    background: ${(props) => props.insideColor};
  }
`;
