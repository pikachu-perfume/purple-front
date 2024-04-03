import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      secondaryViolet: string;
      secondaryBlue: string;
      textColor: {
        100: string; // text primary
        200: string; // text secondary
      };
      textDisabled: string; // text, placeholder disabled
      white: string;
      black: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      big: string;
      lg: string;
    };
    fontWeight: {
      light: string;
      regular: string;
      semiBold: string;
      bolder: string;
    };
    device: {
      mobile: string;
      tablet: string;
      pc: string;
    };
  }
}
