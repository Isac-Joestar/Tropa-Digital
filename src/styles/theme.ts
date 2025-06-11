
interface DefaulTheme{
  primaryBg: string,
  secondaryBg: string,
  tertiaryBg: string,
  specialBg: string,

  primaryText: string,
  secondaryText: string,
  tertiaryText: string,
  specialText: string,

  hover: string
  specialTextOpacity: string
  stroke: string
}

export const light: DefaulTheme ={
  primaryBg: "#F9FBFF",
  secondaryBg: "#FFFFFF",
  tertiaryBg: "#F6F6F6",
  specialBg: "#CC6237",

  primaryText: "#252525",
  secondaryText: "#657593",
  tertiaryText: "rgba(42, 77, 142, 0.5)",
  specialText: "#CC6237",

  hover: "#F6F6F6",
  specialTextOpacity: "rgba(204, 98, 55, 0.5)",
  stroke: "rgba(204, 98, 55, 0.1)",
}

export const dark: DefaulTheme ={
  primaryBg: "rgba(0, 5, 19, 1)",
  secondaryBg: "#070707",
  tertiaryBg: "#D7D7D7",
  specialBg: "#CC6237",

  primaryText: "rgba(231, 231, 231, 1)",
  secondaryText: "rgba(255, 255, 255, 0.6)",
  // secondaryText: "#252525",
  tertiaryText: "rgba(42, 77, 142, 0.5)",
  specialText: "#CC6237",

  hover: "#0B0B0B",
  specialTextOpacity: "rgba(204, 98, 55, 0.80)",
  stroke: "rgba(204, 98, 55, 0.25)",
}