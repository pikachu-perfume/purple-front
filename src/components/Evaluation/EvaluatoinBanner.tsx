"use client";

import Rating from "../atom/Rating";
import { S } from "./styles";

function EvaluationBanner() {
  return (
    <S.Wrapper>
      <S.BannerImg src="/assets/images/bannerImg.png" />
      <S.ContentsWrapper>
        <span>바이레도</span>
        <div>모하비고스트</div>
        <Rating />
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
export default EvaluationBanner;
