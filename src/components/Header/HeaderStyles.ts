import styled from "styled-components";
import { getPalette } from "../Ui/Variables";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => getPalette(theme).primaryColorAccent};
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
    border-bottom: 2px solid
      ${({ theme }) => getPalette(theme).primaryColor};
  }
`;
