import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

const fontFallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily: fontFallback,
    fontSize: "20px",
    fontWeight: "300",
    backgroundColor: "background",
    color: "middle",
  },
  "::selection": {
    color: "middle",
    backgroundColor: "backgroundLight",
  },
  body: {
    lineHeight: "1.62", // maybe too much. consider 1.4
    minHeight: "100vh",
  },
  a: {
    color: "foregroundDark",
    textDecoration: "none",
    transition: "padding 0.1s, margin 0.1s",
  },
  "a:hover, a:focus-visible": {
    outline: 0,
    borderRadius: 1,
    backgroundColor: "backgroundLight",
    paddingX: 1,
    paddingY: 1,
    marginX: -1,
    marginY: -1,
  },
  [`a[href]:not(:where(
    [href^="#"],
    [href^="/"]:not([href^="//"]),
  )):after`]: {
    content: "'\\a0↗'", // non-breaking space
  },
  // h1-6 are "offset" inside/outside posts so that post content can be context-agnostic
  "h1, h2, h3, h4, h5, h6": {
    color: "foregroundDark",
  },
  h1: {
    fontSize: [2, 3],
    fontWeight: "600",
    lineHeight: 1,
    paddingBottom: 4,
    borderBottom: 1,
    marginY: 3,
  },
  h2: {
    fontSize: [1, 2],
    fontWeight: "500",
    lineHeight: 1,
    marginTop: 6,
    marginBottom: 3,
  },
  h3: {
    fontWeight: 500,
    marginY: 4,
    textTransform: "uppercase",
  },
  p: {
    marginY: 4,
  },
  code: {
    fontFamily: `Portfolio Monospace, Portfolio Body, ${fontFallback}`,
    fontSize: "85%",
    backgroundColor: "backgroundLight",
    borderRadius: 1,
    paddingX: 1,
  },
  blockquote: {
    color: "foregroundDark",
    borderLeft: 1,
    paddingX: 4,
    paddingY: 2,
    backgroundColor: "backgroundLight",
    fontStyle: "italic",
  },
  ul: {
    marginBottom: 3,
    listStyleType: "'· '",
  },
  hr: {
    marginY: 3,
    border: "none",
    borderBottom: 2,
  },
  em: {
    fontStyle: "italic",
  },
  strong: {
    fontWeight: "600",
  },
  img: {
    borderRadius: 1,
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
