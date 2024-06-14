import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      subPrimary: string;
      secondaryViolet: string;
      secondaryBlue: string;
      grayColor: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      textColor: {
        100: string; // text primary
        200: string; // text secondary
      };
      textDisabled: string; // text, placeholder disabled
      white: string;
      black: string;
      kakao: string;
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
      bold: string;
      bolder: string;
    };
  }
}
