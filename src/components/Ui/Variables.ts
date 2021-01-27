const mobileBreakingPoint = 850;

export const darkColorPalette: ICustomTheme = {
  primary: "#1976d2",
  primaryDark: "#115293",
  primaryLight: "#4791db",

  secondary: "#4b0082",
  secondaryDark: "#34005b",
  secondaryLight: "#6f339b",
  
  text: "white",
  body: "#1F232A",
  inside: "#4b4f54",

  mobileBreakingPoint: `${mobileBreakingPoint}px`,
  mobileBreakingPointNumber: mobileBreakingPoint
};

export const lightColorPalette: ICustomTheme = {
  primary: "#CBE4F9",
  primaryDark: "#B5C6D5",
  primaryLight: "#DBECFB",

  secondary: "#76b4bd",
  secondaryDark: "#527d84",
  secondaryLight: "#91c3ca",
  
  text: "#33475b",
  body: "#FAFCFE",
  inside: "#f5f8fa",
  
  mobileBreakingPoint: `${mobileBreakingPoint}px`,
  mobileBreakingPointNumber: mobileBreakingPoint
};

export const getTheme = (theme: any) => ({ ...theme } as ICustomTheme);

export interface ICustomTheme {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  inside: string;
  text: string;
  body: string;
  mobileBreakingPoint: string;
  mobileBreakingPointNumber: number;
}
