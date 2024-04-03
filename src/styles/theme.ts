const color = {
  primary: "#FF6E62",
  secondaryViolet: "#7248CD",
  secondaryBlue: "#5A4DFF",
  textColor: {
    100: "#393941", // text primary
    200: "#41424B", // text secondary
  },
  textDisabled: "#646F7C", // text, placeholder disabled
  white: "#FFFFFF",
  black: "#000000",
};

const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  big: "20px",
  lg: "26px",
};

const fontWeight = {
  light: "300",
  regular: "400",
  semiBold: "700",
  bolder: "900",
};

const deviceWidth = {
  mobile: 393,
  tablet: 768, // 임시
  pc: 1440, // 임시
};

const device = {
  mobile: `screen and (max-width: ${deviceWidth.mobile}px)`,
  tablet: `screen and (max-width: ${deviceWidth.tablet}px)`,
  pc: `screen and (max-width: ${deviceWidth.pc}px)`,
};

export const theme = {
  color,
  fontSize,
  fontWeight,
  device,
};
