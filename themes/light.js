const fontSizes = ["1em", "1.62em", "2.64em", "4.25em", "6.88em"];

const space = [0, 5, 8, 13, 21, 34, 55];

const radii = space;

const colors = {
  foreground: "#000",
  foregroundDark: "#444",
  middle: "#777",
  backgroundLight: "#ddd",
  background: "#eee",
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
