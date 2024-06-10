import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";

function DetailPageBanner() {
  return (
    <S.BannerWrapper>
      <S.BannerImage src={"/assets/images/test_image.png"} />
      <S.BannerContentWrap>
        <span>바이레도</span>
        <S.Title>모하비 고스트 오 드 퍼퓸</S.Title>
        <S.ScoreWrap>
          <Star style={{ color: "red", marginRight: "0.5rem" }} />
          <div>4.8</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>플로럴</span>
          </S.CategoryWrap>
        </S.ScoreWrap>
      </S.BannerContentWrap>
    </S.BannerWrapper>
  );
}
export default DetailPageBanner;
