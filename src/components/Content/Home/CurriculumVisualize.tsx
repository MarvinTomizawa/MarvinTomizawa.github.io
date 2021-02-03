import * as React from "react";
import { useTranslation } from "react-i18next";
import { ELanguage } from "../../../models/Router/ELanguage";
import DownloadIcon from "../../../assets/images/download-direto.svg";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";

const StyledDownload = styled.a`
  display: flex;
  background: ${({ theme }) => getTheme(theme).primary};
  height: 2rem;
  width: 12rem;
  padding: 0.5rem;
  align-items: center;
  color: ${({ theme }) => getTheme(theme).text};
  border-radius: 10px;
  box-shadow: 0.2rem 0.2rem 0.2rem ${({ theme }) => getTheme(theme).primaryDark};
`;

const StyledDownloadIcon = styled.img`
  width: 10%;
  margin-right: .3rem;
`;

const CurriculumVisualize: React.FunctionComponent = () => {
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
    <span>
      <StyledDownload target="_blank" href={downloadSrc()}>
        <StyledDownloadIcon src={DownloadIcon} alt="curriculum vitae" />
        <p>{t("curriculum.visualize")}</p>
      </StyledDownload>
    </span>
  );
};

export default CurriculumVisualize;
