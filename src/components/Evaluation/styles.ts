import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  height: 10rem;
  background-color: white;
  width: 36rem;
`;
const BannerImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

const ContentsWrapper = styled.div`
  padding: 1rem;
  & > span {
    font-size: 1.2rem;
    color: #4b4b4b;
  }

  & > div {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentsWrapper,
};
