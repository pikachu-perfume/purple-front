"use client";
import { FC, useMemo } from "react";
import useDeviceType, { MAX_MOBILE_WIDTH } from "@/hook/screen/useDeviceType";
import { EmptyPropsChildren } from "@/constant/commonTypes";
import { Footer, Header, Main, Section } from "@/components/atom/BoxComponents";
import { AppBar } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
  const { isMobile } = useDeviceType();

  const Wrapper = useMemo(() => {
    return isMobile ? MobileTemplate : MobileTemplate;
  }, [isMobile]);

  return <Wrapper>{children}</Wrapper>;
}
/*
// not allowed pc layout not now
const PCTemplate: FC<EmptyPropsChildren> = ({ children }) => {
  return <>{children}</>;
};
 */

const MobileTemplate: FC<EmptyPropsChildren> = ({ children }) => {
  return (
    <Main display={"flex"} height={"100%"} flexDirection={"column"}>
      <Header minHeight={"90px"} bgcolor={"red"}>
        <AppBar />
      </Header>
      <Section
        flex={1}
        bgcolor={"aqua"}
        width={"100%"}
        maxWidth={MAX_MOBILE_WIDTH}
        mx={"auto"}
      >
        {children}
      </Section>
      <Footer minHeight={"90px"} bgcolor={"tan"}></Footer>
    </Main>
  );
};
