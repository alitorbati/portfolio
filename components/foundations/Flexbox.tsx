import styled from "styled-components";
import { system, compose, flexbox, layout } from "styled-system";
import type { FlexboxProps } from "../../types/system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

const allSystemProps = compose(gap, flexbox, layout);

const Flexbox = styled("div")<FlexboxProps>`
  display: flex;
  ${allSystemProps}
`;

export default Flexbox;
