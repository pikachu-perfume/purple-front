"use client";

import React, { useState } from 'react';
import { S } from "./styles";
import { useRouter } from 'next/navigation';
import ProductCardGrid from '@/components/organism/ProductCardGrid/ProductCardGrid';
import SearchBar from '@/components/atom/SearchBar/SearchBar';
import ProductHorizontalScroll from "./_components/ProductList/ProductHorizontalScroll";
import ChipList from "@/components/organism/ChipList/ChipList";

const tempCurrentSearchList = ['딥티크', '오드뚜왈렛', '긴텍스트긴텍스트', '필로시코스', '딥티크', '오드뚜왈렛', '긴텍스트긴텍스트', '필로시코스'];

const SearchPage = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState('');

    const handleClickCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('/');
    }

    const handleChipClick = (text: string) => {
        setKeyword(text);
    };

    return (
        <>
            <S.SearchBarWrap>
                <SearchBar placeholderText="브랜드, 제품명, 리뷰로 찾아보세요" showSearchIcon={false} fontSize='sm' inputValue={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <button onClick={handleClickCancel}>취소</button>
            </S.SearchBarWrap>
            {
                !keyword &&
                (<div>
                    <div>
                        <S.SearchTitle>
                            <span>최근 검색</span>
                            <span>전체 삭제</span>
                        </S.SearchTitle>
                    </div>
                    <ChipList chipList={tempCurrentSearchList} onChipClick={handleChipClick} />
                    <div>
                        <S.SearchTitle>
                            <span>최근 본 상품</span>
                            <span>전체 삭제</span>
                        </S.SearchTitle>
                    </div>
                    <ProductHorizontalScroll />
                </div>
                )
            }
            {
                keyword && (
                    <div>
                        {/* TODO : 메인의 scroll 위치를 기억해야하는 경우 */}
                        {false && <S.EmptyWrap>
                            <div>
                                <p>검색 결과가 없습니다. <br/> 상품 등록 요청을 해주세요.</p>
                                <button>상품 등록 요청</button>
                            </div>
                        </S.EmptyWrap>}
                        {true && <ProductCardGrid />}
                    </div>
                )
            }
        </>
    );
};

export default SearchPage;