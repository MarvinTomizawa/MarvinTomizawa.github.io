import * as React from "react";
import { useTranslation } from "react-i18next";
import ContentWrapper from "../ContentStyle";

const Experience: React.FunctionComponent = () => {
  const { t } = useTranslation();
  
  return (
    <ContentWrapper>
      <h1>{t("content.experience.title")}</h1>
    </ContentWrapper>
  );
};

export default Experience;
