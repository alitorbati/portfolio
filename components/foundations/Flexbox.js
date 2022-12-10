import styled from "styled-components";
import { system } from "styled-system";
import { flexbox, layout } from "styled-system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

export default styled("div")`
  display: flex;
  ${gap}
  ${flexbox}
  ${layout}
`;
