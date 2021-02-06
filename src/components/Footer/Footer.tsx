import styled from "styled-components";
import { Icon } from "../Ui/common/Icon";
import { getTheme } from "../Ui/Variables";

const Footer: React.FunctionComponent = () => {
  return (
    <FooterWrapper>
      <nav>
        <IconList>
          <li>
            <a href="https://github.com/MarvinTomizawa">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marvin-tomizawa-695b70152">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/marvin745">
              <InstagramIcon />
            </a>
          </li>
        </IconList>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => getTheme(theme).primary} 5%,
    ${({ theme }) => getTheme(theme).primaryDark} 90%
  );
  bottom: 0;
  height: 6rem;
  padding: 1.5rem;
  position: absolute;
  width: 100%;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    padding: 0.3rem;
    height: 2rem;
  }
`;

const IconList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    justify-content: flex-start;
  }
`;
const FooterIcon = styled(Icon)`
  @media (max-width: ${({ theme }) => getTheme(theme).mobileBreakingPoint}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const GithubIcon = styled(FooterIcon)`
  background-image: url("https://github.com/fluidicon.png");
`;

const LinkedinIcon = styled(FooterIcon)`
  background-image: url("https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca");
`;

const InstagramIcon = styled(FooterIcon)`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png");
`;
