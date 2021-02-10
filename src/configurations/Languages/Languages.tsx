import { Icon } from "../../components/Ui/common/Icon";
import { ELanguage } from "../../models/Router/ELanguage";

export const PT_LANGUAGE_TRANSLATION = {
  "language.1.title": "Português",
  "language.2.title": "Inglês",
};

export const EN_LANGUAGE_TRANSLATION = {
  "language.1.title": "Portuguese",
  "language.2.title": "English",
};

export const Languages = [
  {
    title: "language.1.title",
    nativeTitle: "Português",
    image: <Icon />,
    icon: "🇧🇷",
    value: ELanguage.portuguese,
  },
  {
    title: "language.2.title",
    nativeTitle: "English",
    image: <Icon />,
    icon: "🇺🇸",
    value: ELanguage.english,
  },
];