import styled from 'styled-components'
import { getTheme } from '../Ui/Variables';

export const FooterWrapper = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    background-image: linear-gradient(180deg,
    ${({ theme }) => getTheme(theme).primary} 5%,
    ${({ theme }) => getTheme(theme).primaryDark} 90%
  );
    padding: .5rem;
`;

export const IconList = styled.ul`
    display: flex;
    list-style: none;
`;

export const Icon = styled.div`
    border-radius: 50%;    
    width: 30px;
    height: 30px;
    background-image: url("https://image.flaticon.com/icons/png/512/65/65000.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 115%;
    border: 2px solid black;
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
