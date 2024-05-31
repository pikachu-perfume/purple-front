import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 28rem;
  height: 17.7rem;
  background-color: ${theme.color.white};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 4rem;

  & > div {
    color: ${theme.color.textDisabled};
    font-size: ${theme.fontSize.sm};
    white-space: pre-line;
    display: flex;
    text-align: center;
  }
`;

const Title = styled.span`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.semiBold};
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;

  & > * {
    width: 100%;
    height: 4.8rem;
    border: none;
    font-weight: ${theme.fontWeight.bold};
  }

  & > button:first-of-type {
    border-radius: 0 0 0 1rem;
    color: ${theme.color.textDisabled};
    background-color: ${theme.color.white};
    border-top: 1px solid ${theme.color.textDisabled};
  }

  & > button:last-of-type {
    border-radius: 0 0 1rem 0;
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    border-top: 1px solid ${theme.color.primary};
  }
`;

export const S = {
  Wrapper,
  ContentsWrap,
  Title,
  ButtonWrap,
};
