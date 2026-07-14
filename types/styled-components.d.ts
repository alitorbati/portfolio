import "styled-components";
import type { Theme } from "./content";

declare module "styled-components" {
  // Augment styled-components' DefaultTheme with this project's theme shape so
  // `props.theme` and styled-system scale lookups are typed everywhere.
  export interface DefaultTheme extends Theme {}
}
