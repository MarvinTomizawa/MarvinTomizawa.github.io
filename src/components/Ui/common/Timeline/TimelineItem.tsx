import styled from "styled-components";
import { getTheme } from "../../Variables";

export interface TimelineItemProps {
  title: string;
  description: string;
  subDescription: string;
  timelineColor?: string;
}

interface TimelineItemStyleProps {
  timelineColor?: string;
}

const TimelineItem: React.FunctionComponent<TimelineItemProps> = (props) => {
  return (
    <TimelineItemWrapper>
      <TimelineItemContent timelineColor={props.timelineColor}>
        <TimelineItemIcon timelineColor={props.timelineColor}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.subDescription}</p>
      </TimelineItemContent>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;

const TimelineItemWrapper = styled.li`
  display: flex;
  padding: 0 1rem;
`;

const TimelineItemIcon = styled.div.attrs<TimelineItemStyleProps>((props) => ({
  timelineColor: props.timelineColor || "black",
}))<TimelineItemStyleProps>`
  background-color: ${({ theme }) => getTheme(theme).inside};
  border: solid ${(props) => props.timelineColor} 0.2rem;
  border-radius: 50%;
  top: calc(50% - 0.4rem);
  height: 0.8rem;
  left: -8px;
  position: absolute;
  width: 0.8rem;
`;

const TimelineItemContent = styled.span.attrs<TimelineItemStyleProps>(
  (props) => ({
    timelineColor: props.timelineColor || "black",
  })
)<TimelineItemStyleProps>`
  border-left: solid ${(props) => props.timelineColor} 0.2rem;
  padding: 1rem;
  position: relative;
`;
