import * as React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";
import styled from "styled-components";
import { getTheme } from "../../Variables";
import { Icon } from "../Icon";

interface TimelineProps {
  title: string;
  items: TimelineItemProps[];
  topColor?: string;
  timelineColor?: string;
}

interface TimelineStyleProps {
  topBackgroundColor?: string;
}

const Timeline: React.FunctionComponent<TimelineProps> = (props) => {
  const mapItems = () => {
    return props.items.map((item, index) => (
      <TimelineItem
        key={index}
        title={item.title}
        description={item.description}
        subDescription={item.subDescription}
        timelineColor={props.timelineColor}
      />
    ));
  };

  return (
    <TimelineWrapper>
      <TimelineTitle topBackgroundColor={props.topColor}>
        <TimelineTitleIcon />
        <h2>{props.title}</h2>
      </TimelineTitle>
      <TimelineList>{mapItems()}</TimelineList>
    </TimelineWrapper>
  );
};

export default Timeline;

const TimelineWrapper = styled.section`
  background-color: ${({ theme }) => getTheme(theme).inside};
  padding: 1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    min-width: 23rem;
  }
`;

const TimelineTitle = styled.span.attrs<TimelineStyleProps>((props) => ({
  topBackgroundColor: props.topBackgroundColor || "black",
}))<TimelineStyleProps>`
  display: flex;
  border-bottom: solid ${(props) => props.topBackgroundColor} 0.2rem;
  align-items: center;
`;

const TimelineTitleIcon = styled(Icon)`
  margin-right: 0.5rem;
`;

const TimelineList = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
`;