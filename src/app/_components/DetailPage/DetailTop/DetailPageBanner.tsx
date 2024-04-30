import useThemeStyles from "@/hook/useThemeStyles";
import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";
import { Typography } from "@mui/material";

function DetailPageBanner() {
  const { textDisableColor } = useThemeStyles();

  return (
    <S.BannerWrapper>
      <S.BannerImage src={"/assets/images/test_image.png"} />
      <S.BannerContentWrap>
        <span className={textDisableColor}>바이레도</span>
        <S.Title>모하비 고스트 오 드 퍼퓸</S.Title>
        <S.ScoreWrap>
          <Star style={{ color: "red" }} />
          <div>4.8</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <Typography className={textDisableColor}>플로럴</Typography>
          </S.CategoryWrap>
        </S.ScoreWrap>
      </S.BannerContentWrap>
    </S.BannerWrapper>
  );
}
export default DetailPageBanner;
