import * as React from "react";
import { useTranslation } from "react-i18next";
import CurriculumVisualize from "./CurriculumVisualize";
import { ContentWrapper } from "../ContentStyle";
import HomeEducation from "./HomeEducation";
import HomeExperience from "./HomeExperience";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <h1>{t("content.home.title")}</h1>
      <CurriculumVisualize />
      <TimelineWrapper>
        <HomeExperienceStyled />
        <HomeEducationStyled />
      </TimelineWrapper>
    </ContentWrapper>
  );
};

export default Home;

const HomeEducationStyled = styled(HomeEducation)`
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 30%;
    height: 65%;
  }
`;

const HomeExperienceStyled = styled(HomeExperience)`
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 30%;
    height: 65%;
    margin-right: 10px;
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
