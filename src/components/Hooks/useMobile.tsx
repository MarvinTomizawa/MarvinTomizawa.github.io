import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { getTheme } from "../Ui/Variables";

function useMobile() {
  const theme = getTheme(useTheme());
  const [isMobile, setToMobile] = useState(window.innerWidth < theme.mobileBreakingPointNumber);

  function handleWidthChange(event: any) {
    
    let changeToMobile =
      event.target.innerWidth < theme.mobileBreakingPointNumber;

      setToMobile(changeToMobile);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  });

  return isMobile;
}

export const withMobile = (Component: any) => {
  return (props: any) => {
    const isMobile = useMobile();

    return <Component isMobile={isMobile} {...props} />;
  };
};
