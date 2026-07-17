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
      // Smooth-scroll in-page anchor jumps (e.g. the table of contents),
      // unless the reader has asked for reduced motion.
      scrollBehavior: "smooth",
      "@media (prefers-reduced-motion: reduce)": {
        scrollBehavior: "auto",
      },
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
      mb: "2",
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
      my: "3",
    },
    "h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p": {
      mt: "2",
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
    // A fence's `title="..."` becomes a caption above its code block. The
    // <figure> owns the vertical rhythm so the caption and block read as one
    // unit; the <pre> keeps its own background and radius.
    ".code-figure": {
      my: "3",
    },
    ".code-title": {
      fontFamily: fontFallbackMono,
      fontSize: "75%",
      color: "textAccent",
      mb: "1",
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
    // GFM tables: Chakra's Preflight resets table borders and spacing, so
    // rebuild them here. Wrapped in .markdown-container so it only affects
    // rendered post content.
    ".markdown-container table": {
      display: "block",
      width: "fit-content",
      maxWidth: "100%",
      mb: "3",
      overflowX: "auto",
      borderCollapse: "collapse",
    },
    ".markdown-container :is(th, td)": {
      border: "1",
      px: "3",
      py: "2",
      textAlign: "left",
      verticalAlign: "top",
    },
    ".markdown-container th": {
      fontWeight: 600,
      bg: "backgroundAccent",
    },
    ul: {
      mb: "3",
      ml: "4",
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
    // Images never exceed the content width but keep their natural size, so
    // small images aren't upscaled into a pixelated, oversized mess.
    ".markdown-container img": {
      maxWidth: "100%",
      height: "auto",
    },
    ".markdown-container video": {
      width: "100%",
    },
    // <ImageRow> in MDX fills the row. By default each item is an equal-width
    // column (as large as possible) — for same-aspect media that also equalizes
    // height. Pass `matchHeight` to instead give every image/video a shared
    // height with widths following each aspect ratio. The attribute selectors
    // out-rank the .markdown-container rules above, so order doesn't matter.
    ".image-row :is(img, video)": {
      display: "block",
    },
    '.image-row[data-match="width"] > *': {
      flex: "1 1 0",
      minWidth: 0,
    },
    '.image-row[data-match="width"] :is(img, video)': {
      width: "100%",
      height: "auto",
    },
    '.image-row[data-match="height"] :is(img, video)': {
      height: "clamp(8rem, 20vw, 15rem)",
      width: "auto",
      maxWidth: "100%",
    },
    ".image-row > div": {
      display: "flex",
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
