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
      <HomeExperienceStyled />
      <HomeEducationStyled />
    </StyledSection>
  );
};

export default HomeEducationExperienceSection;

const StyledSection = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0.5rem 0.25rem;
  padding-bottom: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 75%;
    justify-content: space-evenly;
    flex-direction: row;
    padding: 0;
    margin: 5rem auto;
  }
`;

const HomeEducationStyled = styled(HomeEducation)`
  height: 50%;
  width: 100%;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 100%;
    margin: 0 1rem;
    
    width: 45%;
  }
`;

const HomeExperienceStyled = styled(HomeExperience)`
  height: 50%;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 100%;
    margin: 0 1rem;
    width: 45%;
  }
`;
