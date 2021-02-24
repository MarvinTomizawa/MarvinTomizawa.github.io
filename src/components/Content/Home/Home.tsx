import * as React from "react";
import ContentWrapper from "../ContentStyle";
import HomeEducationExperienceSection from "./EducationExperienceSection/HomeEducationExperienceSection";

const Home: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <HomeEducationExperienceSection />
    </ContentWrapper>
  );
};

export default Home;
