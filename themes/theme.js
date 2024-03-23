const fontSizes = ["1em", "1.2em", "1.8em", "4.24em", "6.86em"];

const space = [0, 5, 8, 13, 21, 34, 55];

const radii = space;

const colors = {
  textAccent: "#000",
  text: "#222",
  background: "#fff",
  backgroundAccent: "#eee",
};

const borders = [
  `0`,
  `1px solid ${colors.backgroundAccent}`,
  `1px solid ${colors.textAccent}`,
  `2px solid ${colors.textAccent}`,
];

export default {
  fontSizes,
  space,
  radii,
  colors,
  borders,
};
