import * as React from "react";

export interface HomeSkillsProps {
  className?: string;
}

const HomeSkills: React.FunctionComponent<HomeSkillsProps> = (props) => {
  return <section className={props.className}></section>;
};

export default HomeSkills;
