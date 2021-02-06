import * as React from "react";
import { useTranslation } from "react-i18next";
import { ELanguage } from "../../../models/Router/ELanguage";
import DownloadIcon from "../../../assets/images/download-direto.svg";
import styled from "styled-components";
import { getTheme } from "../../Ui/Variables";
import { Icon } from "../../Ui/common/Icon";

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
      <StyledViewIcon />
      <p>{t("curriculum.visualize")}</p>
    </StyledDownload>
  );
};

export default CurriculumVisualize;

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

const StyledViewIcon = styled(Icon)`
  width: 10%;
  margin-right: 0.3rem;
  background-image: url(${DownloadIcon});
  border: none;
`;
