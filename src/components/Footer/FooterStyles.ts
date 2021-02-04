import styled from "styled-components";
import { Icon } from "../Ui/common/Icon";
import { getTheme } from "../Ui/Variables";

export const FooterWrapper = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => getTheme(theme).primary} 5%,
    ${({ theme }) => getTheme(theme).primaryDark} 90%
  );
  padding: 0.3rem;
`;

export const IconList = styled.ul`
  display: flex;
  list-style: none;
`;

export const GithubIcon = styled(Icon)`
  background-image: url("https://github.com/fluidicon.png");
`;

export const LinkedinIcon = styled(Icon)`
  background-image: url("https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca");
`;

export const InstagramIcon = styled(Icon)`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png");
`;
