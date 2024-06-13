'use client'

import ProductCardGrid from '@/components/organism/ProductCardGrid/ProductCardGrid';
import { S } from "./styles";

const SearchResultPage = () => {
    return (
        <div>
            {/* TODO : 메인의 scroll 위치를 기억해야하는 경우 모달화해야 할 수도 있음 */}
            {false && <S.Wrapper>
                <div>
                    <p>검색 결과가 없습니다. <br/> 상품 등록 요청을 해주세요.</p>
                    <button>상품 등록 요청</button>
                </div>
            </S.Wrapper>}
            {true && <ProductCardGrid />}
        </div>
    );
};

export default SearchResultPage;