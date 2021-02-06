import * as React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../../Ui/common/Timeline/Timeline";
import { Educations } from "../../../configurations/Education/Educations";
import { TimelineItemProps } from "../../Ui/common/Timeline/TimelineItem";

interface HomeEducationProps {
  className?: string;
}

const HomeEducation: React.FunctionComponent<HomeEducationProps> = (props) => {
  const { t } = useTranslation();

  const mappedItems: TimelineItemProps[] = Educations.map((education) => {
    return {
      title: t(education.title),
      description: t(education.description),
      subDescription: t(education.subDescription),
    };
  });

  return (
    <div className={props.className}>
      <Timeline title={t("home.education.title")} items={mappedItems} />
    </div>
  );
};

export default HomeEducation;
