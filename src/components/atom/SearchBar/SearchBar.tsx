"use client";

import { S } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholderText: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({
  placeholderText, 
  inputValue,
  onChange
}: Props) {

  return (
    <S.Wrapper>
      <S.SearchWrap>
        <SearchIcon sx={{ fontSize: "2.5rem", color: "gray" }} />
        <S.SearchInput placeholder={placeholderText} value={inputValue} onChange={onChange}  />
      </S.SearchWrap>
    </S.Wrapper>
  );
}
export default SearchBar;
