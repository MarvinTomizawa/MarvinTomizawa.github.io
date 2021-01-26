const mobileBreakingPoint = 800;

export const darkColorPalette: IColorPalette = {
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

export const lightColorPalette: IColorPalette = {
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

export const getPalette = (theme: any) => ({ ...theme } as IColorPalette);

export interface IColorPalette {
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
