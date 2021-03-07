import * as React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../../../Ui/common/Timeline/Timeline";
import { Experiences } from "../../../../configurations/Experience/Experience";
import { TimelineItemProps } from "../../../Ui/common/Timeline/TimelineItem";
import WorkCaseIcon from "../../../../assets/images/home-icons/case-icon.png"

interface HomeExperienceProps {
  className?: string;
}

const HomeExperience: React.FunctionComponent<HomeExperienceProps> = (
  props
) => {
  const { t } = useTranslation();

  const experienceItens: TimelineItemProps[] = Experiences.map((item) => {
    return {
      title: t(item.title),
      description: t(item.description),
      subDescription: t(item.subDescription),
    };
  });

  return (
    <div className={props.className}>
      <Timeline
        title={t("home.experience.title")}
        items={experienceItens}
        descriptionLenght={40}
        mobileDescriptionLenght={40}
        iconUrl={WorkCaseIcon}
      />
    </div>
  );
};

export default HomeExperience;
