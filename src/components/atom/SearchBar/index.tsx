"use client";

import { S } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <S.Wrapper>
      <S.SearchWrap>
        <SearchIcon sx={{ fontSize: "2.5rem", color: "gray" }} />
        <S.SearchInput placeholder="나의 향을 검색해보세요" />
      </S.SearchWrap>
    </S.Wrapper>
  );
}
export default SearchBar;
