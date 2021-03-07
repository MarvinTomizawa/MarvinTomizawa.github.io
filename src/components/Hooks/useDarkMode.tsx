import { useEffect, useState } from "react";

const darkString = "dark";
const lightString = "light";
const themeString = "theme";

const isDarkTheme = () => {
  const localTheme = window.localStorage.getItem(themeString);
  if (localTheme) {
    return localTheme === darkString;
  }

  return false;
};

export const useDarkTheme = () => {
  const defaultTheme = isDarkTheme();
  const [isdarkTheme, setIsDarkTheme] = useState(defaultTheme);

  const setThemeInStorage = (theme: string) => {
    if (theme) {
      if (theme === darkString) {
        window.localStorage.setItem(themeString, darkString);
      } else {
        window.localStorage.setItem(themeString, lightString);
      }
    }
  };

  const toggleTheme = () => {
    setThemeInStorage(!isdarkTheme ? darkString : lightString);
    setIsDarkTheme(!isdarkTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(themeString);
    setThemeInStorage(localTheme || lightString);
  }, []);

  return [isdarkTheme, toggleTheme];
};