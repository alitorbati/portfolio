import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const fontFallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const fontFallbackMono = `ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace`;

// The project's original styled-system scale (Fibonacci-ish), preserved verbatim
// so numeric props render identically to the previous styled-components setup.
const scale = {
  0: { value: "0" },
  1: { value: "5px" },
  2: { value: "8px" },
  3: { value: "13px" },
  4: { value: "21px" },
  5: { value: "34px" },
  6: { value: "55px" },
  7: { value: "89px" },
  8: { value: "144px" },
  9: { value: "233px" },
};

const config = defineConfig({
  theme: {
    tokens: {
      spacing: scale,
      sizes: scale,
      radii: scale,
      fontSizes: {
        0: { value: "1em" },
        1: { value: "1.2em" },
        2: { value: "1.8em" },
        3: { value: "4.24em" },
        4: { value: "6.86em" },
      },
      borders: {
        1: { value: "1px solid {colors.backgroundAccent}" },
        2: { value: "1px solid {colors.textAccent}" },
        3: { value: "2px solid {colors.textAccent}" },
      },
    },
    semanticTokens: {
      colors: {
        background: { value: { _light: "#fff", _dark: "#111" } },
        backgroundAccent: { value: { _light: "#eee", _dark: "#222" } },
        text: { value: { _light: "#222", _dark: "#aaa" } },
        textAccent: { value: { _light: "#000", _dark: "#ddd" } },
      },
    },
  },
  // Ported from the previous styles/GlobalStyle.ts. Colors use semantic tokens so
  // they follow the OS color scheme; the numeric spacing/font/border values resolve
  // against the custom token scales defined above.
  globalCss: {
    html: {
      fontFamily: fontFallback,
      fontWeight: 300,
      bg: "background",
      color: "text",
    },
    "::selection": {
      color: "textAccent",
      bg: "backgroundAccent",
    },
    body: {
      lineHeight: "1.5",
      minHeight: "100vh",
      fontOpticalSizing: "auto",
    },
    a: {
      color: "textAccent",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: 500,
    },
    'a:hover, a:focus-visible, [data-active="true"]': {
      outline: 0,
      borderRadius: "1",
      bg: "backgroundAccent",
      px: "1",
      mx: "-1",
    },
    'a[href]:not(:where(\n    [href^="#"],\n    [href^="/"]:not([href^="//"]),\n  )):after': {
      content: "'\\a0↗'", // non-breaking space
    },
    "h1, h2, h3, h4, h5, h6": {
      color: "textAccent",
      mt: "5",
      mb: "3",
      fontSize: "0",
    },
    h1: {
      fontSize: "2",
      fontWeight: 600,
      lineHeight: 1.2,
      mt: "0",
    },
    h2: {
      fontSize: "1",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 400,
    },
    p: {
      my: "4",
    },
    code: {
      fontFamily: fontFallbackMono,
      fontSize: "85%",
      bg: "backgroundAccent",
      borderRadius: "1",
      px: "1",
      whiteSpace: "pre-wrap",
    },
    // Shiki code blocks: the <pre> carries the light theme inline; add the box
    // styling and reset the inner <code> so the inline-`code` rule above doesn't
    // leak in. Long lines scroll horizontally rather than wrapping.
    ".shiki": {
      padding: "4",
      borderRadius: "1",
      overflowX: "auto",
      fontSize: "85%",
      whiteSpace: "pre",
    },
    ".shiki code": {
      bg: "transparent",
      padding: 0,
      borderRadius: 0,
      fontSize: "inherit",
      whiteSpace: "inherit",
    },
    // Follow next-themes: under `.dark`, swap to Shiki's dark-theme variables.
    ".dark .shiki, .dark .shiki span": {
      color: "var(--shiki-dark) !important",
      backgroundColor: "var(--shiki-dark-bg) !important",
    },
    blockquote: {
      borderLeft: "2",
      px: "4",
      fontStyle: "italic",
      ml: [0, "-4"],
    },
    ul: {
      mb: "3",
      ml: "16px",
      listStyleType: "disc",
    },
    ol: {
      mb: "3",
      listStyleType: "decimal",
    },
    hr: {
      my: "3",
      border: "none",
      borderBottom: "1",
    },
    em: {
      fontStyle: "italic",
    },
    strong: {
      fontWeight: 600,
    },
    "img, video": {
      borderRadius: "2",
    },
    ".markdown-container img, .markdown-container video": {
      width: "100%",
    },
    // Chakra's Preflight sets `svg { display: block }`, which pushes icons onto
    // their own line next to text. Keep lucide icons inline and sized to the
    // current font size (matching the previous 1em icons).
    "svg.lucide": {
      display: "inline-block",
      width: "1em",
      height: "1em",
      verticalAlign: "-0.125em",
    },
  },
});

export const system = createSystem(defaultConfig, config);
