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

const allSystemProps = compose(
  color,
  space,
  layout,
  border,
  background,
  flexbox
);

const Box = styled("div")`
  ${allSystemProps}

  &:hover {
    ${(props) => props._hover && allSystemProps(props._hover)}
  }

  &:focus-visible {
    ${(props) => props._focus && allSystemProps(props._focus)}
  }
`;

export default Box;
