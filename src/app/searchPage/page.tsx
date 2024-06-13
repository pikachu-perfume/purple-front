"use client";

import ProductHorizontalScroll from "./_components/ProductList/ProductHorizontalScroll";
import ChipList from "@/components/organism/ChipList/ChipList";
import { S } from "./styles";

const tempCurrentSearchList = ['딥티크', '오드뚜왈렛', '긴텍스트긴텍스트', '필로시코스', '딥티크', '오드뚜왈렛', '긴텍스트긴텍스트', '필로시코스']

const SearchPage = () => {
    return (
        <>
            <div>
                <S.SearchTitle>
                    <span>최근 검색</span>
                    <span>전체 삭제</span>
                </S.SearchTitle>
            </div>
            <ChipList chipList={tempCurrentSearchList} />
            {/* <Chip text={'aaa'}/> */}
            <div>
                <S.SearchTitle>
                    <span>최근 본 상품</span>
                    <span>전체 삭제</span>
                </S.SearchTitle>
            </div>
            <ProductHorizontalScroll />
        </>
    );
};

export default SearchPage;