import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PtTranslation from "./translations/pt-br.json";
import EnTranslation from "./translations/en.json";
import { ELanguage } from "./models/Router/ELanguage";

const resources = {
  en: {
    translation: EnTranslation,
  },
  pt: {
    translation: PtTranslation,
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