import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PtTranslation from "./translations/pt-br.json";
import EnTranslation from "./translations/en.json";
import { ELanguage } from "./models/Router/ELanguage";
import {
  EN_EDUCATIONS_TRANSLATION,
  PT_EDUCATIONS_TRANSLATION,
} from "./configurations/Education/Educations";

import {
  EN_EXPERIENCE_TRANSLATION,
  PT_EXPERIENCE_TRANSLATION,
} from "./configurations/Experience/Experience";
const resources = {
  en: {
    translation: {
      ...EnTranslation,
      ...EN_EDUCATIONS_TRANSLATION,
      ...EN_EXPERIENCE_TRANSLATION,
    },
  },
  pt: {
    translation: {
      ...PtTranslation,
      ...PT_EDUCATIONS_TRANSLATION,
      ...PT_EXPERIENCE_TRANSLATION,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: ELanguage.default,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
