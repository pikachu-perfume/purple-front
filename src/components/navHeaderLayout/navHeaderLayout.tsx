import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import { CSSProperties, ReactNode } from "react";

function NavHeader({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  const router = useRouter();

  const handleRouterBack = () => {
    router.back();
  };

  return (
    <S.Wrapper style={style}>
      <div onClick={handleRouterBack}>
        <ArrowBackIosNewIcon sx={{ fontSize: "2.4rem" }} />
      </div>
      <div>{children}</div>
    </S.Wrapper>
  );
}
export default NavHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 1.8rem;
  width: 100%;
`;

const S = {
  Wrapper,
};
