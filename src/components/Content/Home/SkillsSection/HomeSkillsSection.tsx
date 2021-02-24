import * as React from "react";
import styled from "styled-components";
import { getTheme } from "../../../Ui/Variables";
import HomeLanguages from "./HomeLanguages";

export interface HomeSkillsSectionProps {
  className?: string;
}

const HomeSkillsSection: React.FunctionComponent<HomeSkillsSectionProps> = (
  props
) => {
  return (
    <section className={props.className}>
      <HomeLanguagesStyled />
    </section>
  );
};

export default HomeSkillsSection;

const HomeLanguagesStyled = styled(HomeLanguages)`
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    grid-column: 8/9;
    grid-row: 3;
    margin: 0;
  }
`;
