import * as React from "react";
import { useTranslation } from "react-i18next";
import { ELanguage } from "../../../models/Router/ELanguage";
import styled from "styled-components";

interface CurriculumVisualizeProps {
  className?: string;
}

const CurriculumVisualize: React.FunctionComponent<CurriculumVisualizeProps> = (
  props
) => {
  const { t, i18n } = useTranslation();

  const downloadSrc = () => {
    switch (i18n.language) {
      case ELanguage.english:
        return "https://drive.google.com/file/d/1mgEb9_EFVBuq_OHsSZUuBXMPCK6v_5_Q/view?usp=sharing";
      case ELanguage.portuguese:
        return "https://drive.google.com/file/d/1oBcHsumcPEyIx-TKhzrJ9Hbky0JaI7hT/view?usp=sharing";
      default:
        return "";
    }
  };

  return (
    <StyledDownload
      className={props.className}
      target="_blank"
      href={downloadSrc()}
    >
      <p>{t("curriculum.visualize")}</p>
    </StyledDownload>
  );
};

export default CurriculumVisualize;

const StyledDownload = styled.a`
  align-items: top;
  display: flex;
  padding: 0 0.5rem;
  font-weight:bold;
`;
