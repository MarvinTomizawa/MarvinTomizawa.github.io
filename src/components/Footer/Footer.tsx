import {
  InstagramIcon,
  LinkedinIcon,
  IconList,
  FooterWrapper,
  GithubIcon,
} from "./FooterStyles";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
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
