import styled from "styled-components";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { flexbox, layout, space } from "styled-system";

export default styled("div")`
  display: flex;
  ${(props) =>
    props.gap ? css({ gap: themeGet(`space.${props.gap}`, "")(props) }) : ""}
  ${flexbox}
  ${layout}
  ${space}
`;
