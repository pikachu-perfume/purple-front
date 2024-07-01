"use client";

import React from "react";
import ProductCard from "../../molecule/ProductCard/ProductCard";
import { S } from "./styles";

const ProductHorizontalScroll = () => {
  return (
    <S.Wrapper>
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </S.Wrapper>
  );
};

export default ProductHorizontalScroll;
