import styled from "styled-components";
import LanguagePicker from "../Ui/common/LanguagePicker";
import ThemeChanger from "../Ui/common/ThemeChanger";
import { getTheme } from "../Ui/Variables";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => getTheme(theme).primaryDark},
    ${({ theme }) => getTheme(theme).primary} 50%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    flex-direction: row;
    height: 10%;
    padding: 1rem;
    nav {
      min-width: 400px;
      width: 40%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-family: Pacifico, cursive;
  color: ${({ theme }) => getTheme(theme).text};
  margin-block-start: 0px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    justify-content: flex-end;
  }
`;

export const LinkListItem = styled.li`
  padding: 0 0.5rem;

  a {
    color: ${({ theme }) => getTheme(theme).text};
  }
`;

export const HeaderConfigButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderLanguagePicker = styled(LanguagePicker)`
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  margin-right: 1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    position: inherit;
    flex-basis: content;
  }
`;

export const HeaderThemeChanger = styled(ThemeChanger)`
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
  margin-right: 1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    position: inherit;
    flex-basis: content;
  }
`;
