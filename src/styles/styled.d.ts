import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
      primaryBg: string;
      secondaryBg: string;
      tertiaryBg: string;
      specialBg: string;

      primaryText: string;
      secondaryText: string;
      tertiaryText: string;
      specialText: string;

      hover: string
      specialTextOpacity: string;
      stroke: string;
  }
}