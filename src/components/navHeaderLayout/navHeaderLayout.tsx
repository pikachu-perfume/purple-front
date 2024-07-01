"use client";

import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import { CSSProperties, ReactNode } from "react";

function NavHeader({
  children,
  style,
  iconColor,
}: {
  children?: ReactNode;
  style?: CSSProperties;
  iconColor?: string;
}) {
  const router = useRouter();

  const handleRouterBack = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <div onClick={handleRouterBack}>
        <ArrowBackIosNewIcon sx={{ fontSize: "2.4rem", color: iconColor }} />
      </div>
      <div style={style}>
        <div>{children}</div>
      </div>
    </S.Wrapper>
  );
}
export default NavHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem;
  width: 100%;
  background-color: ${theme.color.white};

  & > div:first-of-type {
    line-height: 1;
  }

  & > div:last-of-type {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const S = {
  Wrapper,
};
