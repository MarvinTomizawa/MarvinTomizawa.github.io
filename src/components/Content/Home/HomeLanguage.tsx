import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Languages } from "../../../configurations/Languages/Languages";
import { getTheme } from "../../Ui/Variables";

export interface HomeLanguageProps {
  className?: string;
}

const HomeLanguage: React.FunctionComponent<HomeLanguageProps> = (props) => {
  const { t } = useTranslation();
  const getItems = () => {
    return Languages.map((language, index) => (
      <LanguageItem key={index}>
        <ItemIcon>{language.image}</ItemIcon>
        <ItemTitle>{t(language.title)}</ItemTitle>
      </LanguageItem>
    ));
  };

  return (
    <StyledSection className={props.className}>
      <HomeLanguagesTitle>{t("home.language.title")}</HomeLanguagesTitle>
      <LanguagesList>{getItems()}</LanguagesList>
    </StyledSection>
  );
};

export default HomeLanguage;

const StyledSection = styled.section`
  background-color: ${({ theme }) => getTheme(theme).inside};
  margin: 0 0.25rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    margin:0 auto;
    margin-bottom: 10vh;
    width: 94%;
  }
`;

const HomeLanguagesTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid black;
`;

const LanguagesList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

const LanguageItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const ItemTitle = styled.p`
  border-bottom: 1px solid black;
`;

const ItemIcon = styled.div`
  display: flex;
  height: 3rem;
  justify-content: center;
  margin: 0.5rem;
  width: 3rem;

  & div {
    height: 100%;
    width: 100%;
  }
`;
