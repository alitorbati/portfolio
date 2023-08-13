import theme from "./theme";

const colors = {
  foreground: "#dfdbca",
  middle: "#a9a699",
  backgroundLight: "#41403b",
  background: "#222",
};

const borders = [
  `0`,
  `1px solid ${colors.backgroundLight}`,
  `1px solid ${colors.middle}`,
  `2px solid ${colors.foreground}`,
];

export default {
  ...theme,
  colors,
  borders,
};
