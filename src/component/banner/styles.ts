import styled from "@emotion/styled";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.6rem;
  width: 361px;
`;

const BannerImg = styled(Image)`
  height: 250px;
  border-radius: 0.6rem 0.6rem 0 0;
  background-color: bisque;
  width: 100%;
`;

const ContentWrap = styled.div`
  padding: 1rem;
  height: 142px;
`;

const TopContent = styled.div`
  margin: 10px 0;
  & > span {
    color: #9091a0;
  }
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
`;

const Score = styled.div`
  display: flex;
  color: #9091a0;
`;

const CategoryWrap = styled.div`
  display: flex;
  margin-left: 5px;

  & > span {
    margin-left: 5px;
  }
`;

const BannerInfo = styled.div`
  height: 3.75rem;
  width: 320px;
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentWrap,
  TopContent,
  BannerInfo,
  Title,
  Score,
  CategoryWrap,
};
