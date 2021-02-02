import * as React from "react";
import { useTranslation } from "react-i18next";
import CurriculumDownload from "./CurriculumDownload";
import { ContentWrapper } from "../ContentStyle";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <h1>{t("content.home.title")}</h1>
      <CurriculumDownload />
    </ContentWrapper>
  );
};

export default Home;
