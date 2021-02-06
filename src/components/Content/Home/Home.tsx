import * as React from "react";
import { useTranslation } from "react-i18next";
import CurriculumVisualize from "./CurriculumVisualize";
import ContentWrapper from "../ContentStyle";
import HomeEducation from "./HomeEducation";
import HomeExperience from "./HomeExperience";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <HomeTitle>{t("content.home.title")}</HomeTitle>
      <HomeCurriculumVisualize />
      <TimelineWrapper>
        <HomeExperienceStyled />
        <HomeEducationStyled />
      </TimelineWrapper>
    </ContentWrapper>
  );
};

export default Home;

const HomeTitle = styled.h1`
  text-align: center;
`;

const HomeCurriculumVisualize = styled(CurriculumVisualize)`
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    margin: 0;
  }
`;

const HomeEducationStyled = styled(HomeEducation)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 30%;
    height: 65%;
    margin: 0.25rem;
  }
`;

const HomeExperienceStyled = styled(HomeExperience)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 30%;
    height: 65%;
    margin: 0.25rem;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    flex-direction: row;
  }
`;
