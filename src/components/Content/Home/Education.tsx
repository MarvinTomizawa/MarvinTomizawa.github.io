import * as React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../../Ui/common/Timeline/Timeline";
import { Educations } from "../../../configurations/Education/Educations";
import { TimelineItemProps } from "../../Ui/common/Timeline/TimelineItem";

const Education: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const mappedItems: TimelineItemProps[] = Educations.map((education) => {
    return {
      title: t(education.title),
      description: t(education.description),
      subDescription: t(education.subDescription),
    };
  });

  return <Timeline title={t("education.title")} items={mappedItems} />;
};

export default Education;
