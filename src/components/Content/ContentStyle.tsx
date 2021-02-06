import styled from "styled-components";
import CustomScrollBar from "../Ui/common/CustomScroll";
import { getTheme } from "../Ui/Variables";

interface ContentWrapperProps {
  className?: string;
}

const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = (
  props
) => {
  return (
    <Content className={props.className}>
      <CustomScrollBar>{props.children}</CustomScrollBar>
    </Content>
  );
};

export default ContentWrapper;

const Content = styled.main`
  padding: 1rem;
  padding-bottom: 6rem;
  width: 100%;
  
  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    height: 85vh;
    padding-bottom: 2rem;
  }
`;
