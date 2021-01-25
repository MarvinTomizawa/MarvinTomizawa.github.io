import * as React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../ContentStyle";

const NotFound: React.FunctionComponent = () => {
  const { t } = useTranslation();
  
  return (
    <ContentWrapper>
      <h1>{t("content.notFound.title")}</h1>
    </ContentWrapper>
  );
};

export default NotFound;
