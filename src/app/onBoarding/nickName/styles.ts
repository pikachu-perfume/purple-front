import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 2rem;
`;

const NicknameLabel = styled.div`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  width: 25rem;
`;

const NickNameInputWrap = styled.div`
  display: flex;
  width: 36rem;
  background-color: ${theme.color.white};
  align-items: center;
  padding: 1rem;
  margin: 6rem 0;
  border: 1px solid ${theme.color.grayColor[200]};
  border-radius: 0.8rem;

  & > input {
    border: none;
    background: none;
    width: 100%;
    height: 4rem;
    margin-right: 1rem;
  }
`;

const FormWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const S = {
  Wrapper,
  FormWrap,
  NicknameLabel,
  NickNameInputWrap,
};
