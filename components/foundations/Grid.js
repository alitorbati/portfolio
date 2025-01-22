import styled from "styled-components";
import { system, compose, grid, layout } from "styled-system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

const allSystemProps = compose(gap, grid, layout);

export default styled("div")`
  display: grid;
  ${allSystemProps}
`;
