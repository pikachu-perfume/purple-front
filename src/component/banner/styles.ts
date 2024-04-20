import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 36rem;
`;

const BannerImg = styled.img`
  height: 25rem;
  border-radius: 0.6rem 0.6rem 0 0;
  width: 100%;
`;

const ContentWrap = styled.div`
  padding: 1rem;
  height: 14.2rem;
`;

const TopContent = styled.div`
  margin: 1rem 0;
  & > span {
    color: #9091a0;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
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
  TopContent,
  BannerInfo,
  Title,
  Score,
  CategoryWrap,
};
