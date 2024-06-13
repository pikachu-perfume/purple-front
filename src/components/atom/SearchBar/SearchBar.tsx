"use client";

import { S } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholderText: string;
  showSearchIcon?: boolean;
  fontSize?: 'sm' | 'base';
}

function SearchBar({
  placeholderText, 
  showSearchIcon = true, 
  fontSize = 'base'
}: Props) {

  return (
    <S.Wrapper showSearchIcon={showSearchIcon}>
      <S.SearchWrap>
        {
          showSearchIcon && <SearchIcon sx={{ fontSize: "2.5rem", color: "gray" }} />
        }
        <S.SearchInput placeholder={placeholderText} fontSize={fontSize} />
      </S.SearchWrap>
    </S.Wrapper>
  );
}
export default SearchBar;
