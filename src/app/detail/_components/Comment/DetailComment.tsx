import DetailReview from "./DetailReview/DetailReview";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { S } from "./styles";

function DetailComment() {
  return (
    <S.Wrapper>
      <S.TotalComment>
        <div>
          전체 <span>25</span>건
        </div>
        <ArrowForwardIosIcon />
      </S.TotalComment>
      <DetailReview />
      <S.CommentButtonWrap>
        <button> 23개 코멘트 전체보기</button>
      </S.CommentButtonWrap>
    </S.Wrapper>
  );
}
export default DetailComment;
