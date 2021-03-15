import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3de7cb",
  primaryBright: "#3de7cb",
  primaryDark: "#3de7cb",
  secondary: "#1a6d60",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0c0520",
  backgroundDisabled: "#182432",
  contrast: "#191326",
  invertedContrast: "#287571",
  input: "#eeeaf4",
  tertiary: "#182432",
  text: "#ffffff",
  textDisabled: "#BDC2C4",
  textSubtle: "#41f3d3",
  borderColor: "#E9EAEB",
  card: "linear-gradient(123deg,#182432 10%,#297d77)",
  gradients: {
    bubblegum: "#182432",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#0c0520",
  backgroundDisabled: "#182432",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#ffffff",
  textDisabled: "#666171",
  textSubtle: "#41f3d3",
  borderColor: "#524B63",
  card: "linear-gradient(123deg,#182432 10%,#297d77)",
  gradients: {
    bubblegum: "#182432",
  },
};
