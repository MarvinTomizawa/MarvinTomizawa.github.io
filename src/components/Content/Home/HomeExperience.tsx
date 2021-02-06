import * as React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../../Ui/common/Timeline/Timeline";
import { Experiences } from "../../../configurations/Experience/Experience";
import { TimelineItemProps } from "../../Ui/common/Timeline/TimelineItem";

const HomeExperience: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const experienceItens: TimelineItemProps[] = Experiences.map((item) => {
    return {
      title: t(item.title),
      description: t(item.description),
      subDescription: t(item.subDescription),
    };
  });

  return (
    <Timeline title={t("home.experience.title")} items={experienceItens} />
  );
};

export default HomeExperience;
