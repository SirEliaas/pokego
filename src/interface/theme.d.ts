import { light, Theme } from "@source/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {  }
}