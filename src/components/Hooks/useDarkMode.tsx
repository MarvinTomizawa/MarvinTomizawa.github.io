import { useEffect, useState } from "react";

export const useDarkTheme = () => {
  const [isdarkTheme, setIsDarkTheme] = useState(true);

  const setThemeInStorage = (theme: string) => {
    if (theme) {
      if (theme === "dark") {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    }
  };

  const toggleTheme = () => {
    setThemeInStorage(!isdarkTheme ? "light" : "dark");
    setIsDarkTheme(!isdarkTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    setThemeInStorage(localTheme || "dark");
  }, []);

  return [isdarkTheme, toggleTheme];
};