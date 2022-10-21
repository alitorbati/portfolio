const fontSizes = ["1em", "1.62em", "2.64em", "4.25em", "6.88em"];

const space = [0, 5, 8, 13, 21, 34, 55];

const radii = space;

const colors = {
  foreground: "#222",
  background: "#fff",
  hint: "#eee",
  accent: "#888",
};

const borders = [`1px solid ${colors.hint}`, `2px solid ${colors.foreground}`];

export default {
  fontSizes,
  space,
  radii,
  colors,
  borders,
};
