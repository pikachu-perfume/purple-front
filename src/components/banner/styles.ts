import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.6rem;
  overflow: hidden;
  width: 100%;
  max-width: 36rem;
`;

const BannerImg = styled.img`
  aspect-ratio: 1.44;
  width: 100%;
`;

const ContentWrap = styled.div`
  height: 14.2rem;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: 700;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Score = styled.div`
  display: flex;
  color: #9091a0;
`;

const CategoryWrap = styled.div`
  display: flex;
  margin-left: 0.5rem;

  & > span {
    margin-left: 0.5rem;
  }
`;

const BannerInfo = styled.div`
  margin-top: auto;
  font-size: 1.4rem;
  line-height: 2.2rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const S = {
  Wrapper,
  BannerImg,
  ContentWrap,
  BannerInfo,
  Title,
  Score,
  CategoryWrap,
};
