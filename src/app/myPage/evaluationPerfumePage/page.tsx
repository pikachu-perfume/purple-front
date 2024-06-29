"use client";

import styled from "@emotion/styled";
import ProductCardGrid from "@/components/organism/ProductCardGrid/ProductCardGrid";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";

const EvaluationPerfumePage = () => {
  return (
    <S.Wrapper>
      <NavHeader>
        <NavHeaderInner text="평가향수" />
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

const S = {
  Wrapper,
  HeaderInner,
};
