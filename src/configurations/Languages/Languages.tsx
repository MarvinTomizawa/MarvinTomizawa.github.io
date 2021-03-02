import { Icon } from "../../components/Ui/common/Icon";
import { ELanguage } from "../../models/Router/ELanguage";
import AmericaIcon from "../../assets/images/home-icons/language-icons/america-icon.png";
import BrasilIcon from "../../assets/images/home-icons/language-icons/brazil-icon.png";

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
    image: <Icon url={BrasilIcon}/>,
    icon: "🇧🇷",
    value: ELanguage.portuguese,
  },
  {
    title: "language.2.title",
    nativeTitle: "English",
    image: <Icon url={AmericaIcon}/>,
    icon: "🇺🇸",
    value: ELanguage.english,
  },
];
