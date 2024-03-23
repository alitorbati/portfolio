import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

const fontFallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const fontFallbackMono = `ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace`;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily: fontFallback,
    fontWeight: 300,
    backgroundColor: "background",
    color: "text",
  },
  "::selection": {
    color: "textAccent",
    backgroundColor: "backgroundAccent",
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
  [`a:hover, a:focus-visible, [data-active="true"]`]: {
    outline: 0,
    borderRadius: 1,
    backgroundColor: "backgroundAccent",
    paddingX: 1,
    marginX: -1,
  },
  [`a[href]:not(:where(
    [href^="#"],
    [href^="/"]:not([href^="//"]),
  )):after`]: {
    content: "'\\a0↗'", // non-breaking space
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "textAccent",
    marginTop: 5,
    marginBottom: 3,
    fontSize: 0,
  },
  h1: {
    fontSize: 2,
    fontWeight: 600,
    lineHeight: 1.2,
    marginTop: 0,
  },
  h2: {
    fontSize: 1,
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
    marginY: 4,
  },
  code: {
    fontFamily: fontFallbackMono,
    fontSize: "85%",
    backgroundColor: "backgroundAccent",
    borderRadius: 1,
    paddingX: 1,
    whiteSpace: "pre-wrap",
  },
  blockquote: {
    borderLeft: 2,
    paddingX: 4,
    fontStyle: "italic",
    marginLeft: [0, -4],
  },
  ul: {
    marginBottom: 3,
    marginLeft: "16px",
    listStyleType: "disc",
  },
  ol: {
    marginBottom: 3,
    listStyleType: "decimal",
  },
  hr: {
    marginY: 3,
    border: "none",
    borderBottom: 1,
  },
  em: {
    fontStyle: "italic",
  },
  strong: {
    fontWeight: 600,
  },
  "img, video": {
    borderRadius: 2,
  },
  ".markdown-container img, .markdown-container video": {
    width: "100%",
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export default GlobalStyle;
