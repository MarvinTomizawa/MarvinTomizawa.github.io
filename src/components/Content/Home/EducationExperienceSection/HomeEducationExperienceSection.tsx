import * as React from "react";
import styled from "styled-components";
import { getTheme } from "../../../Ui/Variables";
import HomeEducation from "./HomeEducation";
import HomeExperience from "./HomeExperience";

export interface HomeEducationExperienceSectionProps {
  className?: string;
}

const HomeEducationExperienceSection: React.FunctionComponent<HomeEducationExperienceSectionProps> = (
  props
) => {
  return (
    <StyledSection className={props.className}>
      <HomeEducationStyled />
      <HomeExperienceStyled />
    </StyledSection>
  );
};

export default HomeEducationExperienceSection;

const StyledSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 75%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const HomeEducationStyled = styled(HomeEducation)`
  margin-bottom: 0.5rem;
  height: 50%;
  width: 100%;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 100%;
    width: 50%;
    margin: 0 1rem;
  }
`;

const HomeExperienceStyled = styled(HomeExperience)`
  margin-bottom: 0.5rem;
  height: 50%;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 100%;
    width: 50%;
    margin: 0 1rem;
  }
`;
