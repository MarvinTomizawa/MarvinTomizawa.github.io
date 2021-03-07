import React from "react";
import styled, { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import { ELanguage } from "../../../models/Router/ELanguage";
import { Languages } from "../../../configurations/Languages/Languages";
import { getTheme } from "../Variables";

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
}

export default withTranslation()(withTheme(LanguagePicker));

const StyledSelect = styled.select`
  border: none;
  border-radius: 10px;
  padding: 0 0.3rem;
  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    font-size: 1.1rem;
  }
`;
