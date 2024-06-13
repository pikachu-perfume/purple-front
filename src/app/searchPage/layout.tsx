'use client';

import { S } from "./styles";
import SearchBar from "@/components/atom/SearchBar/index";

const Searchlayout = ({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <S.SearchBarWrap>
                <SearchBar placeholderText="브랜드, 제품명, 리뷰로 찾아보세요" showSearchIcon={false} fontSize='sm' />
                <button>취소</button>
            </S.SearchBarWrap>
            {children}
        </div>
    );
};

export default Searchlayout;