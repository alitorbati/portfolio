import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

import FKScreamerBold from "./fonts/FKScreamer-Bold.woff2";
import PolySansMedian from "./fonts/PolySans-Median.woff2";
import PolySansNeutral from "./fonts/PolySans-Neutral.woff2";
import PolySansNeutralItalic from "./fonts/PolySans-NeutralItalic.woff2";
import PolySansSlim from "./fonts/PolySans-Slim.woff2";
import PolySansSlimItalic from "./fonts/PolySans-SlimItalic.woff2";
import PolySansSlimMono from "./fonts/PolySans-SlimMono.woff2";

const fonts = `
  @font-face {
    font-family: Portfolio Headline;
    src: url(${FKScreamerBold}) format("woff2");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url(${PolySansSlim}) format("woff2");
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url(${PolySansSlimItalic}) format("woff2");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url(${PolySansNeutral}) format("woff2");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url(${PolySansNeutralItalic}) format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: Portfolio Body;
    src: url(${PolySansMedian}) format("woff2");
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "Portfolio Monospace";
    src: url(${PolySansSlimMono}) format("woff2");
    font-weight: 400;
    font-display: swap;
  }
`;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily:
      'Portfolio Body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
  "a:hover": {
    textDecoration: "underline",
  },
  "a:focus-visible": {
    outline: 0,
    boxShadow: "button",
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${global}
`;

export default GlobalStyle;
