export const colorPalette = {
  primaryColor: "#60DAFB",
  primaryColorAccent: "#368DBC",
  secondaryColor: "#8DC1E4",
  secondaryColorAccent: "#90A8BB",
  text: "white",
  body: "#1F232A",
};

export const getPalette = (theme: any) => ({ ...theme } as IColorPalette);

export interface IColorPalette {
  primaryColor: string;
  primaryColorAccent: string;
  secondaryColor: string;
  secondaryColorAccent: string;
  text: string;
  body: string;
}
