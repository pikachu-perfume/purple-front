"use client";

import styled from "@emotion/styled";
import ProductCardGrid from "@/components/organism/ProductCardGrid/ProductCardGrid";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";

const EvaluationPerfumePage = () => {
  return (
    <S.Wrapper>
      <NavHeader>
        <S.HeaderInner>
          <span>취향분석</span>
        </S.HeaderInner>
      </NavHeader>
      <ProductCardGrid />
    </S.Wrapper>
  );
};

export default EvaluationPerfumePage;

const Wrapper = styled.div`
  & > div:last-child {
    padding-top: 6.9rem;
  }
`;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

export const S = {
  Wrapper,
  HeaderInner,
};
