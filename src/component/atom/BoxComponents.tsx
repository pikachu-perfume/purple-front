import * as React from "react";
import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";

// Box 에 semantic web 을위해서 매번 component넣지말고 component 부여된 컴포넌트 미리 만들어놓고 사용.
export const Main = ComponentGenerator("main");
export const Section = ComponentGenerator("section");
export const Footer = ComponentGenerator("footer");
export const Header = ComponentGenerator("header");
export const Body = ComponentGenerator("body");
export const HTML = ComponentGenerator("html");

function ComponentGenerator<C extends React.ElementType>(component: C) {
  return forwardRef<C, Omit<BoxProps, "component">>(function Component(
    { children, ...props },
    ref,
  ) {
    return (
      <Box {...props} ref={ref} component={component}>
        {children}
      </Box>
    );
  });
}
