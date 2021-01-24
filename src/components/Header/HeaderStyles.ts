import styled from "styled-components";
import { getPalette } from "../Ui/Variables";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }) => getPalette(theme).primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  
  @media (min-width: ${({ theme }) => getPalette(theme).mobileBreakingPoint}) {
    flex-direction: row;
    height:12%;
    nav {
      min-width: 400px;  
      width: 40%;
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

  @media(min-width: ${({theme}) => getPalette(theme).mobileBreakingPoint }){
    justify-content: flex-end;
  }
`;

export const LinkListItem = styled.li`
  padding: 0 .5rem;

  a {
    color: ${({ theme }) => getPalette(theme).text};
  }
`;
