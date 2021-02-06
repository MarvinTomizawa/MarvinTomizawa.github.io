import * as React from "react";
import { useTranslation } from "react-i18next";
import CurriculumVisualize from "./CurriculumVisualize";
import { ContentWrapper } from "../ContentStyle";
import HomeEducation from "./HomeEducation";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <h1>{t("content.home.title")}</h1>
      <CurriculumVisualize />
      <HomeEducation />
    </ContentWrapper>
  );
};

export default Home;
