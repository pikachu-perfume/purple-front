"use client";

import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    perfume: {
      textMainColor: string;
      textSubColor: string;
      mainBgColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    perfume?: {
      textMainColor?: string;
      textSubColor?: string;
      mainBgColor?: string;
    };
  }
}

const theme = createTheme({
  perfume: {
    textMainColor: "#ff00ff",
    textSubColor: "#00ff00",
    mainBgColor: "#0000ff",
  },
});

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          {children}
        </>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
