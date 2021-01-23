import styled from "styled-components";
import { getPalette } from "../Ui/Variables";

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => getPalette(theme).primaryColorAccent};
  & nav{
    width: 40%;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const LinkListItem = styled.li`
  & a {
    color: ${({ theme }) => getPalette(theme).text};
  }

  & a:hover {
    border-bottom: 2px solid ${({ theme }) => getPalette(theme).primaryColor};
  }
`;

export const HeaderTitle = styled.h1`
  font-family: Pacifico, cursive;
  color: ${({ theme }) => getPalette(theme).text};
`;