import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: ["14px", "18px"],
    backgroundColor: "background",
    color: "foreground",
    textTransform: "lowercase",
  },
  body: {
    lineHeight: "1.5",
    minHeight: "100vh",
    // ${"" /* cursor: url('${cursorImage}'), auto !important; */}
  },
  a: {
    color: "foreground",
  },
  "a:focus-visible": {
    outline: 0,
    boxShadow: "button",
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export default GlobalStyle;
