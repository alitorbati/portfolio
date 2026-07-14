import type { Theme } from "../types/content";
import theme from "./theme";

const colors = {
  textAccent: "#ddd",
  text: "#aaa",
  background: "#111",
  backgroundAccent: "#222",
};

const borders = [
  `0`,
  `1px solid ${colors.backgroundAccent}`,
  `1px solid ${colors.textAccent}`,
  `2px solid ${colors.textAccent}`,
];

const dark: Theme = {
  ...theme,
  colors,
  borders,
};

export default dark;
