import { S } from "./styles";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductCard = () => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.ImageBox>
          <img src="/assets/images/bannerImg.png" alt="Product Image" />
        </S.ImageBox>
        <S.TextBox>
          <span>바이레도</span>
          <p>모하비 고스트 오 드 퍼퓸</p>
          <S.RatingWrap>
            <StarRateIcon sx={{ fontSize: "1.2rem", color: "#FF4647" }} />
            4.8 ∙ 플로럴
          </S.RatingWrap>
        </S.TextBox>
      </S.Card>
    </S.Wrapper>
  );
};

export default ProductCard;
