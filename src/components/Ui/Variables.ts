const mobileBreakingPoint = 850;

export const darkColorPalette: ICustomTheme = {
  primary: "#1976d2",
  primaryDark: "#115293",
  primaryLight: "#4791db",

  secondary: "#e64a19",
  secondaryDark: "#a13311",
  secondaryLight: "#eb6e47",
  
  text: "white",
  body: "#1F232A",
  inside: "",

  mobileBreakingPoint: `${mobileBreakingPoint}px`,
  mobileBreakingPointNumber: mobileBreakingPoint
};

export const lightColorPalette: ICustomTheme = {
  primary: "#e64a19",
  primaryDark: "#e64a19",
  primaryLight: "#e64a19",

  secondary: "#e64a19",
  secondaryDark: "#a13311",
  secondaryLight: "#eb6e47",
  
  text: "white",
  body: "#1F232A",
  inside: "",
  
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
