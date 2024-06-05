"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "./styles";
import Product from "./_components/Product/Product";
import { CommentType } from "@/constant/comment";

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
          {Object.values(CommentType).map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
        </S.CommentWrap>
      </S.Wrapper>
    </>
  );
};
export default CommentPage;
