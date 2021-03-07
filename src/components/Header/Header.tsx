import * as React from "react";
import { withTranslation } from "react-i18next";
import styled, { withTheme } from "styled-components";
import { withMobile } from "../Hooks/useMobile";
import LanguagePicker from "../Ui/common/LanguagePicker";
import ThemeChanger from "../Ui/common/ThemeChanger";
import { getTheme, ICustomTheme } from "../Ui/Variables";

interface HeaderProps {
  className?: string;
  theme?: ICustomTheme;
  isMobile?: boolean;
  toggleTheme: any;
  isDarkTheme: boolean;
}

interface HeaderState {
  pathName: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <HeaderWrapper>
        <HeaderThemeChanger
          isDarkTheme={this.props.isDarkTheme}
          toggleTheme={this.props.toggleTheme}
        />
        <HeaderTitle>Marvin Tomizawa</HeaderTitle>
        <HeaderLanguagePicker showOnlyIcons={this.props.isMobile || false} />
      </HeaderWrapper>
    );
  }
}

export default withTranslation()(withMobile(withTheme(Header)));

const HeaderWrapper = styled.header`
  align-items: center;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`;

const HeaderLanguagePicker = styled(LanguagePicker)`
  align-self: center;
  flex-basis: content;
  margin-top: 5px;
  position: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  width: 45%;
`;

const HeaderThemeChanger = styled(ThemeChanger)`
  height: 2rem;
  width: 1.5rem;
`;
