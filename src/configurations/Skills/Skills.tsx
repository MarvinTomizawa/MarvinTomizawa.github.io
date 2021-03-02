import styled from "styled-components";
import { Icon } from "../../components/Ui/common/Icon";

import AngularIcon from "../../assets/images/home-icons/skills-icons/angular-icon.webp";
import AspNeticon from "../../assets/images/home-icons/skills-icons/aspnet-icon.png";
import CssIcon from "../../assets/images/home-icons/skills-icons/css-icon.webp";
import DockerIcon from "../../assets/images/home-icons/skills-icons/docker-icon.png";
import GitIcon from "../../assets/images/home-icons/skills-icons/git-icon.webp";
import GoIcon from "../../assets/images/home-icons/skills-icons/go-icon.png";
import HtmlIcon from "../../assets/images/home-icons/skills-icons/html-icon.webp";
import JavaIcon from "../../assets/images/home-icons/skills-icons/java-icon.webp";
import JavascriptIcon from "../../assets/images/home-icons/skills-icons/javascript-icon.webp";
import MongoDbIcon from "../../assets/images/home-icons/skills-icons/mongodb-icon.png";
import NetCoreIcon from "../../assets/images/home-icons/skills-icons/netcore-icon.png";
import OracleIcon from "../../assets/images/home-icons/skills-icons/oracle-icon.png";
import PlSqlIcon from "../../assets/images/home-icons/skills-icons/plsql-icon.png";
import PostgresIcon from "../../assets/images/home-icons/skills-icons/postgres-icon.png";
import ReactIcon from "../../assets/images/home-icons/skills-icons/react-icon.png";
import SassIcon from "../../assets/images/home-icons/skills-icons/sass-icon.webp";
import SqlServerIcon from "../../assets/images/home-icons/skills-icons/sql-server-icon.png";
import TypescriptIcon from "../../assets/images/home-icons/skills-icons/typescript-icon.png";
import UnityIcon from "../../assets/images/home-icons/skills-icons/unity-icon.webp";
import VueIcon from "../../assets/images/home-icons/skills-icons/vue-icon.png";

export const PT_SKILL_TRANSLATION = {
  "skill.1.title": "HTML",
  "skill.2.title": "CSS",
  "skill.3.title": "Javascript",
  "skill.4.title": "Typescript",
  "skill.5.title": "React",
  "skill.6.title": "Angular",
  "skill.7.title": "VueJs",
  "skill.8.title": "Sass",
  "skill.9.title": ".NetCore",
  "skill.10.title": "AspNet",
  "skill.11.title": "Java",
  "skill.12.title": "GO Lang",
  "skill.13.title": "Git",
  "skill.14.title": "Docker",
  "skill.15.title": "Postgres",
  "skill.16.title": "Oracle",
  "skill.17.title": "SqlServer",
  "skill.18.title": "PL/SQL",
  "skill.19.title": "MongoDb",
  "skill.20.title": "Unity",
};

export const EN_SKILL_TRANSLATION = {
  "skill.1.title": "HTML",
  "skill.2.title": "CSS",
  "skill.3.title": "Javascript",
  "skill.4.title": "Typescript",
  "skill.5.title": "React",
  "skill.6.title": "Angular",
  "skill.7.title": "VueJs",
  "skill.8.title": "Sass",
  "skill.9.title": ".NetCore",
  "skill.10.title": "AspNet",
  "skill.11.title": "Java",
  "skill.12.title": "GO Lang",
  "skill.13.title": "Git",
  "skill.14.title": "Docker",
  "skill.15.title": "Postgres",
  "skill.16.title": "Oracle",
  "skill.17.title": "SqlServer",
  "skill.18.title": "PL/SQL",
  "skill.19.title": "MongoDb",
  "skill.20.title": "Unity",
};

export interface SkillItem {
  title: string;
  image: any;
  backgroundColor: string;
  color: string;
}

const FullSizedIcon = styled(Icon)`
  height: 100%;
  width: 100%;
`;

export const Skills: SkillItem[] = [
  {
    // HTML
    title: "skill.1.title",
    image: <FullSizedIcon url={HtmlIcon} />,
    backgroundColor: "#E44E25",
    color: "#CF4722",
  },
  {
    // CSS
    title: "skill.2.title",
    image: <FullSizedIcon url={CssIcon} />,
    backgroundColor: "#464196",
    color: "#20639b",
  },
  {
    // Javascript
    title: "skill.3.title",
    image: <FullSizedIcon url={JavascriptIcon} />,
    backgroundColor: "#67A969",
    color: "#548A56",
  },
  {
    // Typescript
    title: "skill.4.title",
    image: <FullSizedIcon url={TypescriptIcon} />,
    backgroundColor: "#464196",
    color: "#146ca4",
  },
  {
    // React
    title: "skill.5.title",
    image: <FullSizedIcon url={ReactIcon} />,
    backgroundColor: "#1F232A",
    color: "#60DAFB",
  },
  {
    // Angular
    title: "skill.6.title",
    image: <FullSizedIcon url={AngularIcon} />,
    backgroundColor: "#464196",
    color: "#dd1b16",
  },
  {
    // VueJs
    title: "skill.7.title",
    image: <FullSizedIcon url={VueIcon} size={60} />,
    backgroundColor: "#607D8B",
    color: "#41B883",
  },
  {
    // Sass
    title: "skill.8.title",
    image: <FullSizedIcon url={SassIcon} />,
    backgroundColor: "#9C57A3",
    color: "#8D4E93",
  },
  {
    // .NetCore
    title: "skill.9.title",
    image: <FullSizedIcon url={NetCoreIcon} size={95} />,
    backgroundColor: "#6D429C",
    color: "#5C2D91",
  },
  {
    // AspNet
    title: "skill.10.title",
    image: <FullSizedIcon url={AspNeticon} />,
    backgroundColor: "#7AB5DB",
    color: "#3765AF",
  },
  {
    // Java
    title: "skill.11.title",
    image: <FullSizedIcon url={JavaIcon} size={90} />,
    backgroundColor: "white",
    color: "#CF5600",
  },
  {
    // GoLang
    title: "skill.12.title",
    image: <FullSizedIcon url={GoIcon} />,
    backgroundColor: "#00ADD8",
    color: "#0097BE",
  },
  {
    // Git
    title: "skill.13.title",
    image: <FullSizedIcon url={GitIcon} />,
    backgroundColor: "#383A3B",
    color: "#3E4041",
  },
  {
    // Docker
    title: "skill.14.title",
    image: <FullSizedIcon url={DockerIcon} size={80} />,
    backgroundColor: "#006BC0",
    color: "#009DCD",
  },
  {
    // Postgres
    title: "skill.15.title",
    image: <FullSizedIcon url={PostgresIcon} size={70} />,
    backgroundColor: "#607D8B",
    color: "#326790",
  },
  {
    // Oracle
    title: "skill.16.title",
    image: <FullSizedIcon url={OracleIcon} size={80} />,
    backgroundColor: "white",
    color: "#EA1B22",
  },
  {
    // SqlServer
    title: "skill.17.title",
    image: <FullSizedIcon url={SqlServerIcon} size={80} />,
    backgroundColor: "white",
    color: "#A91D22",
  },
  {
    // PLSQL
    title: "skill.18.title",
    image: <FullSizedIcon url={PlSqlIcon} />,
    backgroundColor: "white",
    color: "#AF2721",
  },
  {
    // MONGODB
    title: "skill.19.title",
    image: <FullSizedIcon url={MongoDbIcon} size={90} />,
    backgroundColor: "#A3BFCC",
    color: "#4CAF50",
  },
  {
    // Unity
    title: "skill.20.title",
    image: <FullSizedIcon url={UnityIcon} />,
    backgroundColor: "#252525",
    color: "#A3BFCC",
  },
];
