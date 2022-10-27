import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

const fonts = `
  @font-face {
    font-family: Portfolio Headline;
    src: url("/fonts/FKScreamer-Bold.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url("/fonts/PolySans-Slim.woff2") format("woff2");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url("/fonts/PolySans-SlimItalic.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url("/fonts/PolySans-Neutral.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url("/fonts/PolySans-NeutralItalic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url("/fonts/PolySans-Median.woff2") format("woff2");
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "Portfolio Monospace";
    src: url("/fonts/PolySans-SlimMono.woff2") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
`;

const fontFallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily: `Portfolio Body, ${fontFallback}`,
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
    fontFamily: `Portfolio Headline, Portfolio Body, ${fontFallback}`,
    fontWeight: "bold",
    fontSize: [3, 4],
    lineHeight: 1,
    paddingBottom: 5,
    borderBottom: 0,
    marginY: 5,
  },
  h2: {
    fontSize: [1, 2],
    lineHeight: 1,
    paddingBottom: 5,
    borderBottom: 0,
    marginY: 5,
  },
  h3: {
    fontWeight: 600,
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
    borderLeft: 1,
    paddingLeft: 4,
    fontStyle: "italic",
    fontSize: 1,
    lineHeight: 1.2,
  },
  ul: {
    marginBottom: 3,
    listStyleType: "'· '",
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
  ${fonts}
  ${global}
`;

export default GlobalStyle;
