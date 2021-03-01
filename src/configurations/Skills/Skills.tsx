import styled from "styled-components";
import { Icon } from "../../components/Ui/common/Icon";

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
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-256.png" />
    ),
    backgroundColor: "#E44E25",
    color: "#CF4722",
  },
  {
    // CSS
    title: "skill.2.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-256.png" />
    ),
    backgroundColor: "#464196",
    color: "#20639b",
  },
  {
    // Javascript
    title: "skill.3.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-256.png" />
    ),
    backgroundColor: "#67A969",
    color: "#548A56",
  },
  {
    // Typescript
    title: "skill.4.title",
    image: (
      <FullSizedIcon url="https://cdn.auth0.com/blog/logos/Full_TypeScript_Logo.png" />
    ),
    backgroundColor: "#464196",
    color: "#146ca4",
  },
  {
    // React
    title: "skill.5.title",
    image: (
      <FullSizedIcon url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
    ),
    backgroundColor: "#1F232A",
    color: "#60DAFB",
  },
  {
    // Angular
    title: "skill.6.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-symbol-512.png" />
    ),
    backgroundColor: "#464196",
    color: "#dd1b16",
  },
  {
    // VueJs
    title: "skill.7.title",
    image: (
      <FullSizedIcon url="https://br.vuejs.org//images/logo.png" size={60} />
    ),
    backgroundColor: "#607D8B",
    color: "#41B883",
  },
  {
    // Sass
    title: "skill.8.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-256.png" />
    ),
    backgroundColor: "#9C57A3",
    color: "#8D4E93",
  },
  {
    // .NetCore
    title: "skill.9.title",
    image: (
      <FullSizedIcon
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
        size={95}
      />
    ),
    backgroundColor: "#6D429C",
    color: "#5C2D91",
  },
  {
    // AspNet
    title: "skill.10.title",
    image: (
      <FullSizedIcon url="https://www.prchecker.info/free-icons/128x128/asp_net_128_px.png" />
    ),
    backgroundColor: "#7AB5DB",
    color: "#3765AF",
  },
  {
    // Java
    title: "skill.11.title",
    image: (
      <FullSizedIcon
        url="https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png"
        size={90}
      />
    ),
    backgroundColor: "white",
    color: "#CF5600",
  },
  {
    // GoLang
    title: "skill.12.title",
    image: (
      <FullSizedIcon url="https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png" />
    ),
    backgroundColor: "#00ADD8",
    color: "#0097BE",
  },
  {
    // Git
    title: "skill.13.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/github-256.png" />
    ),
    backgroundColor: "#383A3B",
    color: "#3E4041",
  },
  {
    // Docker
    title: "skill.14.title",
    image: (
      <FullSizedIcon
        url="https://image.flaticon.com/icons/png/512/919/919853.png"
        size={80}
      />
    ),
    backgroundColor: "#006BC0",
    color: "#009DCD",
  },
  {
    // Postgres
    title: "skill.15.title",
    image: (
      <FullSizedIcon
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
        size={70}
      />
    ),
    backgroundColor: "#607D8B",
    color: "#326790",
  },
  {
    // Oracle
    title: "skill.16.title",
    image: (
      <FullSizedIcon
        url="https://gcloudlabs.com/wp-content/uploads/2017/08/oracle-database-icon.png"
        size={80}
      />
    ),
    backgroundColor: "white",
    color: "#EA1B22",
  },
  {
    // SqlServer
    title: "skill.17.title",
    image: (
      <FullSizedIcon
        url="https://iconape.com/wp-content/files/jy/81002/svg/microsoft-sql-server.svg"
        size={80}
      />
    ),
    backgroundColor: "white",
    color: "#A91D22",
  },
  {
    // PLSQL
    title: "skill.18.title",
    image: (
      <FullSizedIcon url="https://store.dimensigon.com/wp-content/uploads/2019/03/pl-sql.png" />
    ),
    backgroundColor: "white",
    color: "#AF2721",
  },
  {
    // MONGODB
    title: "skill.19.title",
    image: (
      <FullSizedIcon
        url="https://img.icons8.com/color/452/mongodb.png"
        size={90}
      />
    ),
    backgroundColor: "white",
    color: "#4CAF50",
  },
  {
    // Unity
    title: "skill.20.title",
    image: (
      <FullSizedIcon url="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/Unity_3D.png" />
    ),
    backgroundColor: "#252525",
    color: "#A3BFCC",
  },
];
