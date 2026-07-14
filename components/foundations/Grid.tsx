import styled from "styled-components";
import { system, compose, grid, layout } from "styled-system";
import type { GridProps } from "../../types/system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

const allSystemProps = compose(gap, grid, layout);

const Grid = styled("div")<GridProps>`
  display: grid;
  ${allSystemProps}
`;

export default Grid;
