import React from "react";
import styled, { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import { getTheme } from "../Variables";
import { ELanguage } from "../../../models/Router/ELanguage";
import { Languages } from "../../../configurations/Languages/Languages";
const StyledSelect = styled.select`
  border: none;
  border-radius: 10px;
  padding-left: 0.3rem;
  font-size: 1rem;
`;

export interface LanguagePickerProps {
  showOnlyIcons: boolean;
  i18n?: any;
  t: Function;
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

  getOptions = () => {
    return Languages.map((language, index) => (
      <option value={language.value} key={index}>
        {this.props.showOnlyIcons
          ? language.icon
          : this.props.t(language.nativeTitle)}
      </option>
    ));
  };

  render() {
    return (
      <StyledSelect
        className={this.props.className}
        value={this.state.language}
        onChange={(event) => this.changeLanguage(event)}
        name="languages"
      >
        {this.getOptions()}
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
