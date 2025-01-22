import styled from "styled-components";
import { compose, color, space, typography } from "styled-system";

const Text = styled("span")(compose(color, space, typography));

export default Text;
