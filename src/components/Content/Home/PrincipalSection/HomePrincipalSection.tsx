import * as React from "react";
import styled from "styled-components";
import Logo from "../../../Ui/common/Logo";
import { getTheme } from "../../../Ui/Variables";

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
    </StyledSection>
  );
};

export default HomePrincipalSection;

const StyledSection = styled.section`
  display: none;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    background: ${({ theme }) => getTheme(theme).secondary};
    display: block;
    height: 35%;
    margin-bottom: 5rem;
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  font-size: 5rem;
`;
