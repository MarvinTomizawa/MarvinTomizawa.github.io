import * as React from "react";
import { useTranslation } from "react-i18next";
import { ELanguage } from "../../../models/Router/ELanguage";
import DownloadIcon from "../../../assets/images/download-direto.svg";
import styled from "styled-components";
import { getTheme } from "../Variables";
import { Icon } from "./Icon";

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
      <StyledViewIcon />
    </StyledDownload>
  );
};

export default CurriculumVisualize;

const StyledDownload = styled.a`
  display: flex;
  height: 1.5rem;
  width: 10rem;
  padding: 0 0.5rem;
  align-items: center;
  color: ${({ theme }) => getTheme(theme).text};
`;

const StyledViewIcon = styled(Icon)`
  width: 10%;
  margin-left: 0.3rem;
  background-image: url(${DownloadIcon});
  border: none;
`;
