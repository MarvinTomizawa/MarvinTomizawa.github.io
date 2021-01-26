import React from "react";
import styled, { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import { getPalette } from "./Variables";

const StyledSelect = styled.select`
  border: none;
  border-radius: 10px;
  padding-left: 0.3rem;
`;

export interface LanguagePickerProps {
  i18n?: any;
  className?: string;
  theme?: any;
}

export interface LanguagePickerState {
  language: string;
  windowWidth: number;
}

class LanguagePicker extends React.Component<
  LanguagePickerProps,
  LanguagePickerState
> {
  handleResizeRef:any;

  constructor(props: LanguagePickerProps) {
    super(props);
    this.state = { language: "en", windowWidth: window.innerWidth };
    this.handleResizeRef = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeRef);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeRef);
  }

  render() {
    return (
      <StyledSelect
        className={this.props.className}
        value={this.state.language}
        onChange={(event) => this.changeLanguage(event)}
        name="languages"
        id="teste"
      >
        <option value="pt">{this.isMobile ? "🇧🇷" : "Português"}</option>
        <option value="en">{this.isMobile ? "🇺🇸" : "English"}</option>
      </StyledSelect>
    );
  }

  changeLanguage(event: any) {
    const languageReceived = event.target.value;
    this.setState({ language: languageReceived });
    this.props.i18n.changeLanguage(languageReceived);
  }

  handleResize() {
    let state = { ...this.state, windowWidth: window.innerWidth };
    this.setState(state);
  }

  get isMobile() {
    return (
      window.innerWidth < getPalette(this.props.theme).mobileBreakingPointNumber
    );
  }
}

export default withTranslation()(withTheme(LanguagePicker));
