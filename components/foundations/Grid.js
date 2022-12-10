import styled from "styled-components";
import { system } from "styled-system";
import { grid, layout } from "styled-system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

export default styled("div")`
  display: grid;
  ${gap}
  ${grid}
  ${layout}
`;
