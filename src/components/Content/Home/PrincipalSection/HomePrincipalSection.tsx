import * as React from "react";
import styled from "styled-components";
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
        <p>Marvin Tomizawa</p>
      </StyledDiv>
    </StyledSection>
  );
};

export default HomePrincipalSection;

const StyledSection = styled.section`
  background: ${({ theme }) => getTheme(theme).secondary};
  height: 10rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 80%;
    margin-bottom: 5rem;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
