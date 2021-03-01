import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { withMobile } from "../../Hooks/useMobile";
import RoundProgress from "../../Ui/common/RoundProgress";
import { getTheme } from "../../Ui/Variables";
import { Skills } from "../../../configurations/Skills/Skills";

export interface HomeSkillsProps {
  className?: string;
  isMobile?: boolean;
}

const HomeSkills: React.FunctionComponent<HomeSkillsProps> = (props) => {
  const { t } = useTranslation();

  const mapItems = () => {
    return Skills.map((item, index) => (
      <SkillItem key={index}>
        <RoundProgress
          insideColor={item.backgroundColor}
          progressColor={item.color}
          size={props.isMobile ? "4rem" : "4.1rem"}
        >
          {item.image}
        </RoundProgress>
        <SkillItemDescription>{t(item.title)}</SkillItemDescription>
      </SkillItem>
    ));
  };

  return (
    <StyledSection className={props.className}>
      <Title>{t("home.skills.title")}</Title>
      <SkillList>{mapItems()}</SkillList>
    </StyledSection>
  );
};

export default withMobile(HomeSkills);

const StyledSection = styled.section`
  background-color: ${({ theme }) => getTheme(theme).inside};
  margin: 0 0.25rem;
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    margin: 5rem auto;
    width: 94%;
  }
`;

const Title = styled.h2`
  border-bottom: 2px solid black;
  margin: 0.5rem;
  text-align: center;
`;

const SkillList = styled.ul`
  display: flex;
  justify-content: center; 
  list-style: none;
  flex-wrap: wrap;
  width: 95%;
`;

const SkillItem = styled.li`
  margin: 1.5rem 1rem;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    margin: 1.5rem 2rem;
  }
`;

const SkillItemDescription = styled.p`
  text-align: center;
  font-size: 0.8rem;
  filter: brightness(90%);
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    display: none;
  }
`;
