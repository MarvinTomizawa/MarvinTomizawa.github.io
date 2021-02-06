import styled from "styled-components";
import { getTheme } from "../../Variables";

export interface TimelineItemProps {
  title: string;
  description: string;
  subDescription: string;
  timelineColor?: string;
  descriptionLegth?: number;
}

interface TimelineItemStyleProps {
  timelineColor?: string;
}

const TimelineItem: React.FunctionComponent<TimelineItemProps> = (props) => {
  const descriptionLenght = props.descriptionLegth || 100;

  const getDetails = () => {
    if (props.description.length <= descriptionLenght) {
      return <p>{props.description}</p>;
    }

    const summaryWords = props.description
      .substring(0, descriptionLenght)
      .split(" ");
    const summaryContent = summaryWords
      .splice(0, summaryWords.length - 1)
      .join(" ");

    return (
      <Details>
        <summary>
          <DescriptionShow>{summaryContent}</DescriptionShow>
          <DescriptionHidden>{props.description}</DescriptionHidden>
        </summary>
      </Details>
    );
  };

  return (
    <TimelineItemWrapper>
      <TimelineItemContent timelineColor={props.timelineColor}>
        <TimelineItemIcon timelineColor={props.timelineColor} />
        <h3>{props.title}</h3>
        {getDetails()}
        <TimelineSubDescription>{props.subDescription}</TimelineSubDescription>
      </TimelineItemContent>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;

const DescriptionShow = styled.p`
  order: -1;
`;

const DescriptionHidden = styled.p`
  order: -1;
`;

const Details = styled.details`
  summary {
    display: flex;
    align-items: center;
  }

  ${DescriptionHidden} {
    display: none;
  }

  ${DescriptionShow}:after {
    content: "..";
  }

  &[open] {
    ${DescriptionShow} {
      display: none;
    }

    ${DescriptionHidden} {
      display: block;
    }
  }
`;

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
  padding: 0.7rem 1rem;
  position: relative;
`;

const TimelineSubDescription = styled.p`
  font-size: 0.6rem;
  filter: brightness(80%);
`;
