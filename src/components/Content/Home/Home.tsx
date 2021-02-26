import * as React from "react";
import ContentWrapper from "../ContentStyle";
import HomeEducationExperienceSection from "./EducationExperienceSection/HomeEducationExperienceSection";
import HomeLanguage from "./HomeLanguage";
import HomePrincipalSection from "./HomePrincipalSection";

const Home: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <HomePrincipalSection />
      <HomeEducationExperienceSection />
      <HomeLanguage />
    </ContentWrapper>
  );
};

export default Home;