import * as React from "react";
import ContentWrapper from "../ContentStyle";
import HomeEducationExperienceSection from "./EducationExperienceSection/HomeEducationExperienceSection";
import HomePrincipalSection from "./PrincipalSection/HomePrincipalSection";

const Home: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <HomePrincipalSection />
      <HomeEducationExperienceSection />
    </ContentWrapper>
  );
};

export default Home;