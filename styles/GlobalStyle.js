import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

// const fonts = `
//   @font-face {
//     font-family: Portfolio Headline;
//     src: url("/fonts/FKScreamer-Bold.woff2") format("woff2");
//     font-weight: 400;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: Portfolio Body;
//     src: url("/fonts/PolySans-Slim.woff2") format("woff2");
//     font-weight: 300;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: Portfolio Body;
//     src: url("/fonts/PolySans-SlimItalic.woff2") format("woff2");
//     font-weight: 300;
//     font-style: italic;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: Portfolio Body;
//     src: url("/fonts/PolySans-Neutral.woff2") format("woff2");
//     font-weight: 400;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: Portfolio Body;
//     src: url("/fonts/PolySans-NeutralItalic.woff2") format("woff2");
//     font-weight: 400;
//     font-style: italic;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: Portfolio Body;
//     src: url("/fonts/PolySans-Median.woff2") format("woff2");
//     font-weight: 600;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: "Portfolio Monospace";
//     src: url("/fonts/PolySans-SlimMono.woff2") format("woff2");
//     font-weight: 400;
//     font-display: swap;
//   }
// `;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    // fontFamily:
    //   'Portfolio Body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: ["20px"],
    fontWeight: ["300"],
    backgroundColor: "background",
    color: "foreground",
    textTransform: "lowercase",
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
    content: "' ↗️'",
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  // ${fonts}
  ${global}
`;

export default GlobalStyle;
