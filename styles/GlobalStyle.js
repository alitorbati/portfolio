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
    fontSize: ["20px"],
    fontWeight: ["300"],
    backgroundColor: "background",
    color: "foreground",
  },
  "::selection": {
    color: "background",
    backgroundColor: "accent",
  },
  body: {
    lineHeight: "1.4",
    minHeight: "100vh",
  },
  a: {
    color: "foreground",
    textDecoration: "none",
  },
  "a:hover, a:focus-visible": {
    outline: 0,
    borderRadius: "5px",
    backgroundColor: "hint",
    paddingX: 1,
    paddingY: 1,
    marginX: -1,
    marginY: -1,
  },
  [`a[href]:not(:where(
    [href^="#"],
    [href^="/"]:not([href^="//"]),
  )):after`]: {
    content: "' ↗'",
  },
  h1: {
    fontFamily: `Portfolio Headline, Portfolio Body, ${fontFallback}`,
    fontWeight: "bold",
    fontSize: 4,
    marginY: 3,
    paddingBottom: 3,
    borderBottom: 1,
    lineHeight: 1,
  },
  h2: {
    fontSize: 2,
    marginY: 3,
    paddingBottom: 3,
    borderBottom: 0,
  },
  h3: {
    fontWeight: 600,
    marginY: 3,
  },
  p: {
    marginY: 3,
    color: "accent",
  },
  code: {
    fontFamily: `Portfolio Monospace, Portfolio Body, ${fontFallback}`,
    fontSize: "85%",
    backgroundColor: "hint",
    borderRadius: "5px",
    paddingX: 1,
  },
  blockquote: {
    borderLeft: 1,
    paddingLeft: 3,
    fontStyle: "italic",
    fontWeight: 400,
  },
  ul: {
    marginBottom: 3,
    listStyleType: "'· '",
  },
  li: {
    marginBottom: 2,
  },
  hr: {
    marginY: 3,
    border: 0,
    borderBottom: 0,
  },
  em: {
    fontStyle: "italic",
  },
  strong: {
    fontWeight: "600",
  },
  img: {
    width: "100%",
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${global}
`;

export default GlobalStyle;
