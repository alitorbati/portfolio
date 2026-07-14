import styled from "styled-components";
import { compose, color, space, typography } from "styled-system";
import type { TextProps } from "../../types/system";

const Text = styled("span")<TextProps>(compose(color, space, typography));

export default Text;
