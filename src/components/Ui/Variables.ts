export const colorPalette: IColorPalette = {
  primary: "#368DBC",
  primaryAccent: "#60DAFB",
  secondary: "#8DC1E4",
  secondaryAccent: "#90A8BB",
  text: "white",
  body: "#1F232A",
  mobileBreakingPoint: "750px"
};

export const getPalette = (theme: any) => ({ ...theme } as IColorPalette);

export interface IColorPalette {
  primary: string;
  primaryAccent: string;
  secondary: string;
  secondaryAccent: string;
  text: string;
  body: string;
  mobileBreakingPoint: string;
}
