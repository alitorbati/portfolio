const fontSizes = ["1em", "1.62em", "2.62em", "4.24em", "6.86em"];

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
  `0`,
  `1px solid ${colors.backgroundLight}`,
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
