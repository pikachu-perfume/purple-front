import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

// DetailComment
const Wrapper = styled.div`
  background-color: ${theme.color.white};
`;

const TotalComment = styled.div`
  padding: 1.6rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.bold};

  & > div > span {
    color: red;
  }
`;

const CommentButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;

  & > button {
    width: 100%;
    height: 5rem;
    border: 1px solid gray;
    border-radius: 1rem;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.textDisabled};
    background-color: ${theme.color.white};
  }
`;

// DetailReview
const ReviewWrapper = styled.div`
  padding: 1.6rem;
  border-bottom: 0.5px solid ${theme.color.grayColor[200]};

  & > span {
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.sm};
  }
`;

const Rating = styled.div`
  font-size: ${theme.fontSize.big};
  margin: 0.5rem 0;
`;

const ReviewContent = styled.div`
  font-size: ${theme.fontSize.sm};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const S = {
  Wrapper,
  TotalComment,
  CommentButtonWrap,
  ReviewWrapper,
  Rating,
  ReviewContent,
};
