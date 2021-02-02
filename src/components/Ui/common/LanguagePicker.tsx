import React from "react";
import styled, { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import { getTheme } from "../Variables";
import { ELanguage } from "../../../models/Router/ELanguage";

const StyledSelect = styled.select`
  border: none;
  border-radius: 10px;
  padding-left: 0.3rem;
  font-size: 1rem;
`;

export interface LanguagePickerProps {
  showOnlyIcons: boolean;
  i18n?: any;
  className?: string;
  theme?: any;
}

export interface LanguagePickerState {
  language: string;
}

class LanguagePicker extends React.Component<
  LanguagePickerProps,
  LanguagePickerState
> {
  handleResizeRef: any;

  constructor(props: LanguagePickerProps) {
    super(props);
    this.state = { language: ELanguage.default };
  }

  render() {
    return (
      <StyledSelect
        className={this.props.className}
        value={this.state.language}
        onChange={(event) => this.changeLanguage(event)}
        name="languages"
      >
        <option value={ELanguage.portuguese}>
          {this.props.showOnlyIcons ? "🇧🇷" : "Português"}
        </option>
        <option value={ELanguage.english}>
          {this.props.showOnlyIcons ? "🇺🇸" : "English"}
        </option>
      </StyledSelect>
    );
  }

  changeLanguage(event: any) {
    const languageReceived = event.target.value;
    this.setState({ language: languageReceived });
    this.props.i18n.changeLanguage(languageReceived);
  }

  get isMobile() {
    return (
      window.innerWidth < getTheme(this.props.theme).mobileBreakingPointNumber
    );
  }
}

export default withTranslation()(withTheme(LanguagePicker));
