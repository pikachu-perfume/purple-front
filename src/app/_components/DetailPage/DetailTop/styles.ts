import styled from "@emotion/styled";

// DetailPageBanner

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 40rem;
`;

const BannerContentWrap = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 2rem;

  & > span {
    font-size: 1.4rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const ScoreWrap = styled.div`
  display: flex;
  align-items: center;
  color: #9091a0;
  font-size: 1.2rem;
`;

const CategoryWrap = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-left: 0.5rem;

  & > span {
    margin-left: 0.5rem;
  }
`;

// DetailEvaluation

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  background-color: white;
  margin: 0.5rem 0;

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  & > div {
    font-size: 1.4rem;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Score = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 1rem;

  & > span:last-child {
    color: gray;
    margin-left: 1rem;
  }
`;

const ClickGuide = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const S = {
  BannerWrapper,
  BannerImage,
  Title,
  BannerContentWrap,
  Wrapper,
  ScoreWrap,
  CategoryWrap,
  RatingWrap,
  Score,
  ClickGuide,
};
