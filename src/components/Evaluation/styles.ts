import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  height: 11rem;
  background-color: ${theme.color.white};
  /* width: 36rem; */
  width: 100%;
`;
const BannerImg = styled.img`
  width: 11rem;
  height: 11rem;
`;

const ContentsWrapper = styled.div`
  padding: 1rem;
  & > span {
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.grayColor[300]};
  }

  & > div {
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.bolder};
  }
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentsWrapper,
};
