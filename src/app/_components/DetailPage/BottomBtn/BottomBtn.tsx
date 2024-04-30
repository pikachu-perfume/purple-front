"use client";

import useThemeStyles from "@/hook/useThemeStyles";
import { S } from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function BottomBtn() {
  const { textDisableColor } = useThemeStyles();
  return (
    <S.Wrapper>
      <S.HeartBtn classes={textDisableColor}>
        <FavoriteBorderIcon
          sx={{ fontSize: "2.5rem", marginBottom: "0.3rem" }}
        />
        <span>찜하기</span>
      </S.HeartBtn>
      <S.ButtonWrap>
        <button>인생향수</button>
        <button>코멘트 달기</button>
      </S.ButtonWrap>
    </S.Wrapper>
  );
}
export default BottomBtn;
