const fontSizes = ["1em", "2em", "3em"];

const colors = {
  foreground: "#222",
  background: "white",
  accent: "#888",
};

// something about this pattern smells
const darkColors = {
  foreground: "white",
  background: "#222",
  accent: "#888",
};

const space = [0, 5, 10, 30, 60];

const borders = [`2px solid ${colors.foreground}`];

const darkBorders = [`2px solid ${darkColors.foreground}`];

const shadows = {
  button: `0 0 0 1px ${colors.background}, 0 0 0 3px ${colors.foreground}`,
};

const darkShadows = {
  button: `0 0 0 1px ${darkColors.background}, 0 0 0 3px ${darkColors.foreground}`,
};

const theme = {
  fontSizes,
  space,
  colors,
  borders,
  shadows,
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
  borders: darkBorders,
  shadows: darkShadows,
};

export default theme;
