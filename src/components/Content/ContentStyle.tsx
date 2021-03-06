import styled from "styled-components";
import { getTheme } from "../Ui/Variables";

interface ContentWrapperProps {
  className?: string;
}

const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = (
  props
) => {
  return <Content className={props.className}>{props.children}</Content>;
};

export default ContentWrapper;

const Content = styled.main`
  padding-bottom: 6rem;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 86.5vh;
    padding-bottom: 2rem;
  }
`;
