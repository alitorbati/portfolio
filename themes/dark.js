const fontSizes = ["1em", "1.62em", "2.62em", "4.25em", "6.89em"];

const space = [0, 5, 8, 13, 21, 34, 55];

const radii = space;

const colors = {
  foreground: "#fff",
  foregroundDark: "#ccc",
  middle: "#888",
  backgroundLight: "#333",
  background: "#222",
};

const borders = [
  `1px solid ${colors.middle}`,
  `2px solid ${colors.foregroundDark}`,
];

export default {
  fontSizes,
  space,
  radii,
  colors,
  borders,
};
