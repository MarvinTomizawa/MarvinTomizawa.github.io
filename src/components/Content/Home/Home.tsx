import * as React from "react";
import CurriculumVisualize from "./CurriculumVisualize";
import ContentWrapper from "../ContentStyle";
import HomeEducation from "./HomeEducation";
import HomeExperience from "./HomeExperience";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";
import HomeLanguages from "./HomeLanguages";

const Home: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <TimelineWrapper>
        <HomeCurriculumVisualize />
        <HomeExperienceStyled />
        <HomeEducationStyled />
        <HomeLanguagesStyled />
      </TimelineWrapper>
    </ContentWrapper>
  );
};

export default Home;

const HomeCurriculumVisualize = styled(CurriculumVisualize)`
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    margin: auto;
    grid-column: 5/5;
    grid-row: 2/2;
  }
`;

const HomeEducationStyled = styled(HomeEducation)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    grid-column: 8/9;
    grid-row: 1/3;
    margin: 0;
  }
`;

const HomeExperienceStyled = styled(HomeExperience)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    grid-column: 1/3;
    grid-row: 1 / 4;
    margin: 0;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-gap: 0.25rem;
  }
`;

const HomeLanguagesStyled = styled(HomeLanguages)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    grid-column: 8/9;
    grid-row: 3;
    margin: 0;
  }
`;
