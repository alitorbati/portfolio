import styled from "styled-components";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { layout, flexbox } from "styled-system";

export default styled("div")`
  ${layout}
  ${flexbox}
  ${(props) =>
    props.gap ? css({ gap: themeGet(`space.${props.gap}`, "")(props) }) : ""}
`;
