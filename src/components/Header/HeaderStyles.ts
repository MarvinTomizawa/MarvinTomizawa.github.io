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
  color: white;
  margin-block-start: 0px;
  text-shadow: 2px 2px black;
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
  align-self: center;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    position: inherit;
    flex-basis: content;
    margin-right: 1rem;
    margin-top: 5px;
  }
`;

export const HeaderThemeChanger = styled(ThemeChanger)`
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
  height: 2rem;
  width: 1.5rem;

  &:focus {
    outline: thin dotted;
  }

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    position: inherit;
    width: 1.5rem;
  }
`;
