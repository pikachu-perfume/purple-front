"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "./styles";
import Product from "./_components/Product/Product";
import { CommentType } from "@/constant/comment";
import Rating from "@/components/atom/Rating/Rating";

const CommentPage = () => {
  return (
    <>
      <NavHeader>
        <div
          style={{
            fontSize: "1.8rem",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          코멘트 작성
        </div>
      </NavHeader>
      <S.Wrapper>
        <Product />
        <S.CommentWrap>
          {Object.values(CommentType).map((comment, idx) => (
            <div key={idx}>{comment}</div>
          ))}
        </S.CommentWrap>
        <S.EvaluationWrap>
          <span>이 향수 어때요?</span>
          <S.RatingWrap>
            <Rating precision={0.1} />
            <div>향이 마음에 들어요</div>
          </S.RatingWrap>
        </S.EvaluationWrap>
        <S.ReviewWrap>
          <S.ReviewTitle>
            <span>리뷰 한줄평</span>
            <div>*</div>
          </S.ReviewTitle>
          <textarea></textarea>
        </S.ReviewWrap>
        <button>코멘트 등록</button>
      </S.Wrapper>
    </>
  );
};
export default CommentPage;
