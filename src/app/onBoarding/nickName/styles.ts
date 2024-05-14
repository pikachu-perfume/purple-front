import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const NicknameLabel = styled.div`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  width: 25rem;
`;

const NickNameInputWrap = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.color.white};
  align-items: center;
  padding: 1rem;
  border: 1px solid ${theme.color.grayColor[200]};
  border-radius: 0.8rem;

  & > input {
    border: none;
    background: none;
    width: 36.1rem;
    height: 4rem;
    margin-right: 1rem;
  }
`;

export const S = {
  Wrapper,
  NicknameLabel,
  NickNameInputWrap,
};
