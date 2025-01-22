import styled from "styled-components";
import { system, compose, flexbox, layout } from "styled-system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

const allSystemProps = compose(gap, flexbox, layout);

export default styled("div")`
  display: flex;
  ${allSystemProps}
`;
