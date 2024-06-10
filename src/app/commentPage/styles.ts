import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  position: relative;
`;

const CommentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.grayColor[500]};
  height: 4.6rem;
  width: 22.3rem;
  border-radius: 2.4rem;
  font-size: ${theme.fontSize.sm};
  margin: 2rem 0;

  & > div {
    padding: 1rem;
  }
`;

const EvaluationWrap = styled.div`
  width: 100%;
  margin: 2rem 0;

  & > span {
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

const RatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewWrap = styled.div`
  width: 100%;
  margin-bottom: 9rem;

  & > textarea {
    width: 100%;
    border: none;
    resize: none;
    height: 11.4rem;
    box-shadow: 0px 0px 18px -10px #821919;
    border-radius: 2rem;
    padding: 2rem;
  }
`;

const ReviewTitle = styled.div`
  display: flex;
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semiBold};
  margin: 2rem 0;

  & > div {
    color: red;
    margin-left: 0.4rem;
  }
`;

const CommentButton = styled.div`
  position: fixed;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const S = {
  Wrapper,
  CommentWrap,
  EvaluationWrap,
  RatingWrap,
  ReviewWrap,
  ReviewTitle,
  CommentButton,
};
