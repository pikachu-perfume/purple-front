import styled from "@emotion/styled";
import { ReactNode } from "react";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <div>{children}</div>
    </S.Wrapper>
  );
};
export default ModalLayout;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const S = { Wrapper };
