
interface DefaultTheme{
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
  stroke: string;
  exit: string
}

export const light: DefaultTheme ={
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
  exit: "red"
}

export const dark: DefaultTheme = {
  primaryBg: "#121212",             
  secondaryBg: "#1E1E1E",           
  tertiaryBg: "#2A2A2A",            

  specialBg: "#CC6237",             
  specialText: "#CC6237",           

  primaryText: "#F5F5F5",           
  secondaryText: "#B0B0B0",         
  tertiaryText: "rgba(255, 255, 255, 0.4)", 

  hover: "#333333",                 
  specialTextOpacity: "rgba(204, 98, 55, 0.5)", 
  stroke: "rgba(204, 98, 55, 0.1)", 
  exit: "#C71717"
};