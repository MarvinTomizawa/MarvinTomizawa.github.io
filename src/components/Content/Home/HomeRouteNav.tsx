import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../configurations/Routes/Routes";
import CurriculumVisualize from "../../Ui/common/CurriculumVisualize";
import { getTheme } from "../../Ui/Variables";

export interface HomeRouteNavProps {
  className?: string;
}

const HomeRouteNav: React.FunctionComponent<HomeRouteNavProps> = (props) => {
  const { t } = useTranslation();
  const mapLinks = () => {
    return routes
      .filter((route) => route.show)
      .map((route, index) => (
        <RouteItem key={index}>
          <Link to={route.path}>{t(route.description)}</Link>
        </RouteItem>
      ));
  };

  return (
    <NavWrapper className={props.className}>
      <StyledList>
        {mapLinks()}
        <RouteItem>
          <CurriculumVisualize />
        </RouteItem>
      </StyledList>
    </NavWrapper>
  );
};

export default HomeRouteNav;

const NavWrapper = styled.nav`
  background-color: white;
  padding: 0.2rem;
  border-radius: 20px 0px 0px 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    justify-content: center;
  }
`;

const RouteItem = styled.li`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    font-size: 1.5rem;
  }
`;
