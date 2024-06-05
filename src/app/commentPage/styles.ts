import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const CommentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  height: 4.6rem;
  width: 22.3rem;
  border-radius: 2.4rem;
  font-size: ${theme.fontSize.sm};
`;

export const S = { Wrapper, CommentWrap };
