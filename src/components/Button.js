import styled from "styled-components";
import { space } from "styled-system";
import css from "@styled-system/css";

export default styled("button")(
  space,
  css({
    padding: 1,
    backgroundColor: "background",
    color: "foreground",
    fontSize: 0,
    border: 0,
    "&:focus-visible": {
      boxShadow: "button",
    },
  }),
  {
    outline: 0,
  }
);
