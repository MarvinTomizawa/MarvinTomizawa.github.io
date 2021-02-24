import * as React from "react";

export interface HomePrincipalSectionProps {
  className?: string;
}

const HomePrincipalSection: React.FunctionComponent<HomePrincipalSectionProps> = (
  props
) => {
  return <section className={props.className}></section>;
};

export default HomePrincipalSection;
