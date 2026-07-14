import styled from "styled-components";
import {
  compose,
  color,
  space,
  layout,
  border,
  background,
  flexbox,
} from "styled-system";
import type { BoxProps } from "../../types/system";

const allSystemProps = compose(
  color,
  space,
  layout,
  border,
  background,
  flexbox
);

const Box = styled("div")<BoxProps>`
  ${allSystemProps}

  &:hover {
    ${(props) => props._hover && allSystemProps(props._hover)}
  }

  &:focus-visible {
    ${(props) => props._focus && allSystemProps(props._focus)}
  }
`;

export default Box;
