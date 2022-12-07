import theme from "./theme";

const colors = {
  foreground: "#fff",
  foregroundDark: "#eee",
  middle: "#999",
  backgroundLight: "#444",
  background: "#222",
};

const borders = [
  `0`,
  `1px solid ${colors.backgroundLight}`,
  `1px solid ${colors.middle}`,
  `2px solid ${colors.foregroundDark}`,
];

export default {
  ...theme,
  colors,
  borders,
};
