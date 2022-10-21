const fontSizes = ["1em", "1.62em", "2.62em", "4.25em", "6.89em"];

const space = [0, 5, 8, 13, 21, 34, 55];

const radii = space;

const colors = {
  foreground: "#fff",
  background: "#222",
  hint: "#444",
  accent: "#888",
};

const borders = [
  `1px solid ${colors.hint}`,
  `1px solid ${colors.accent}`,
  `2px solid ${colors.foreground}`,
];

export default {
  fontSizes,
  space,
  radii,
  colors,
  borders,
};
