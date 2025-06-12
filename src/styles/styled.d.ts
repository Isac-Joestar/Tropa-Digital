import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string
    iconSize: string,
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
    borderMenu: string;
    exit: string;
  }
}