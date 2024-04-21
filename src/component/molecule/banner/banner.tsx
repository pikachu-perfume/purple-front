"use client";

import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";
import useThemeStyles from "@/hook/useThemeStyles";
import { Typography } from "@mui/material";

function Banner() {
  const { textMainColor, textDisableColor, textSubColor } = useThemeStyles();

  return (
    <S.Wrapper>
      <S.BannerImg src={"/assets/images/test_image.png"} />
      <S.ContentWrap>
        <span className={textDisableColor}>바이레도</span>
        <S.Title my={"0.4rem"} className={textMainColor}>
          모하비 고스트 오 드 퍼퓸
        </S.Title>
        <S.Score>
          <Star style={{ color: "red" }} />
          <div>4.8</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <Typography className={textDisableColor}>플로럴, 앰버</Typography>
          </S.CategoryWrap>
        </S.Score>

        <S.BannerInfo className={textSubColor}>
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
        </S.BannerInfo>
      </S.ContentWrap>
    </S.Wrapper>
  );
}

export default Banner;
