export const PT_EXPERIENCE_TRANSLATION = {
  "experience.1.title": "Freelancer",
  "experience.1.description":
    "Desenvolvimento de jogos educativos em equipe, responsável por realizar planejamento e desenvolvimento de atividades utilizando Unity 3D.",
  "experience.1.sub.description": "Maio 2018 - Atualmente",

  "experience.2.title": "Db1 Global Software",
  "experience.2.description":
    "Desenvolvimento de sistemas web mvc e integrações entre sistemas. Responsável por realizar desenvolvimento de novas funcionalidades e testes unitários em diversos projetos com a utilização de tecnologias como Spring Boot, Kafka, .NetCore, RabbitMq, VueJs, Angular, e também por realizar manutenção em sistemas legados utilizando AspnetFramework e AngularJs.",
  "experience.2.sub.description": "Maringá-PR, Janeiro 2019 - Outubro 2020",

  "experience.3.title": "Atak Sistemas",
  "experience.3.description":
    "Responsável por realizar depuração de funcionalidades utilizando Aspnet e ext.js.",
  "experience.3.sub.description": "Maringá-PR, Maio 2018 - Junho 2018",
};

export const EN_EXPERIENCE_TRANSLATION = {
  "experience.1.title": "Freelancer",
  "experience.1.description":
    "Development of serious games with a team, in charge of planning and developing activities using Unity 3D.",
  "experience.1.sub.description": "May 2018 - Today",

  "experience.2.title": "Db1 Global Software",
  "experience.2.description":
    "Development of web mvc systems and system integrations. In charge of developing new functionalities and unit tests in different projects using technologies like Spring Boot, Kafka, .NetCore, RabbitMq, VueJs, Angular, and also in charge of maintaining legacy systems with AspnetFramework and AngularJs.",
  "experience.2.sub.description": "Maringá-PR(Brazil), Januray 2019 - October 2020",

  "experience.3.title": "Atak Sistemas",
  "experience.3.description":
    "In charge of debugging functionalities using AspNet and ext.js.",
  "experience.3.sub.description": "Maringá-PR (Brazil), May 2018 - June 2018",
};

const PT_EXPERIENCE_FUNCTION = (size: number) => {
  let educations = [];

  for (let index = 1; index <= size; index++) {
    educations.push({
      title: `experience.${index}.title`,
      description: `experience.${index}.description`,
      subDescription: `experience.${index}.sub.description`,
    });
  }

  return educations;
};

export const Experiences = PT_EXPERIENCE_FUNCTION(3);
