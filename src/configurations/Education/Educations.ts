export const PT_EDUCATIONS_TRANSLATION = {
  "education.1.title": "Unicesumar",
  "education.1.description": "Bacharelado em Engenharia de Software",
  "education.1.sub.description": "2016 - 2020",

  "education.2.title": "Influx",
  "education.2.description": "Lingua Inglesa",
  "education.2.sub.description": "2002 - 2016",
};

export const EN_EDUCATIONS_TRANSLATION = {
  "education.1.title": "Unicesumar - PR",
  "education.1.description": "Software Engineer Bachelor Degree",
  "education.1.sub.description": "2016 - 2020",

  "education.2.title": "Influx - PR",
  "education.2.description": "English Language",
  "education.2.sub.description": "2002 - 2016",
};

const PT_EDUCATIONS_FUNCTION = (size: number) => {
  let educations = [];

  for (let index = 1; index <= size; index++) {
    educations.push({
      title: `education.${index}.title`,
      description: `education.${index}.description`,
      subDescription: `education.${index}.sub.description`,
    });
  }

  return educations;
};


export const Educations = PT_EDUCATIONS_FUNCTION(2);
