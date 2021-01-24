import styled from "styled-components";
import { getPalette } from "../Ui/Variables";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }) => getPalette(theme).primary};
  display: flex;
  height:18%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  
  @media (min-width: ${({ theme }) => getPalette(theme).mobileBreakingPoint}) {
    flex-direction: row;
    flex-wrap: nowrap;
    height:12%;
    nav {
      min-width: 400px;  
      width: 40%;
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media(min-width: ${({theme}) => getPalette(theme).mobileBreakingPoint }){
    justify-content: flex-end;
  }
`;

export const LinkListItem = styled.li`
  padding-right: 1rem;
  font-family: cursive;
  a {
    color: ${({ theme }) => getPalette(theme).text};
    &:hover {
      border-bottom: 2px solid ${({ theme }) => getPalette(theme).primary};
    }
  }
`;

export const HeaderTitle = styled.h1`
  font-family: Pacifico, cursive;
  color: ${({ theme }) => getPalette(theme).text};
`;
