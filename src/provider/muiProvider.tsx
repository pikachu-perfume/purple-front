"use client";

import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    perfume: {
      textMainColor: string;
      textSubColor: string;
      textDisable: string;
      mainThemeColor: string;
      bgMainColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    perfume?: {
      textMainColor?: string;
      textSubColor?: string;
      textDisable?: string;
      mainThemeColor?: string;
      bgMainColor?: string;
    };
  }
}

const theme = createTheme({
  perfume: {
    textMainColor: "#393941",
    textSubColor: "#41424B",
    textDisable: "#9091A0",
    mainThemeColor: "#FF6E62",
    bgMainColor: "#0000ff",
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
