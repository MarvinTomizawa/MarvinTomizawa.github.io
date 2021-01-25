import * as React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../ContentStyle";

const About: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <h1>{t("content.about.title")}</h1>
    </ContentWrapper>
  );
};

export default About;
