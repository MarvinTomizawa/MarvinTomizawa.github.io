import * as React from "react";
import ContentWrapper from "../ContentStyle";
import HomeEducationExperienceSection from "./EducationExperienceSection/HomeEducationExperienceSection";
import HomeLanguage from "./HomeLanguage";
import HomePrincipalSection from "./HomePrincipalSection";
import HomeSkills from "./HomeSkills";

const Home: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <HomePrincipalSection />
      <HomeEducationExperienceSection />
      <HomeSkills />
      <HomeLanguage />
    </ContentWrapper>
  );
};

export default Home;