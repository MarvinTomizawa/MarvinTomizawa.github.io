import styled from "styled-components";
import LanguagePicker from "../Ui/LanguagePicker";
import { getPalette } from "../Ui/Variables";

export const HeaderLanguagePicker = styled(LanguagePicker)`
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;

  @media (min-width: ${({ theme }) => getPalette(theme).mobileBreakingPoint}) {
    position: inherit;
    flex-basis: content;
  }
`;

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }) => getPalette(theme).primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getPalette(theme).mobileBreakingPoint}) {
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
  color: ${({ theme }) => getPalette(theme).text};
  margin-block-start: 0px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (min-width: ${({ theme }) => getPalette(theme).mobileBreakingPoint}) {
    justify-content: flex-end;
  }
`;

export const LinkListItem = styled.li`
  padding: 0 0.5rem;

  a {
    color: ${({ theme }) => getPalette(theme).text};
  }
`;
