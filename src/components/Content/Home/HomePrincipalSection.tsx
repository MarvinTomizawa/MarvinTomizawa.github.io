import * as React from "react";
import styled from "styled-components";
import Logo from "../../Ui/common/Logo";
import { getTheme } from "../../Ui/Variables";
import HomeRouteNav from "./HomeRouteNav";

export interface HomePrincipalSectionProps {
  className?: string;
}

const HomePrincipalSection: React.FunctionComponent<HomePrincipalSectionProps> = (
  props
) => {
  return (
    <StyledSection className={props.className}>
      <StyledDiv>
        <StyledLogo />
      </StyledDiv>
      <StyledHomeRouteNav />
    </StyledSection>
  );
};

export default HomePrincipalSection;

const StyledSection = styled.section`
  background: ${({ theme }) => getTheme(theme).secondary};
  border-radius: 0px 0px 0px 43px;
  display: block;
  height: 65vh;
  margin-bottom: 5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    border-radius: 0px 0px 0px 100px;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 85%;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  font-size: 100%;
`;

const StyledHomeRouteNav = styled(HomeRouteNav)`
  width: 95%;
  margin-left: auto;
`;
