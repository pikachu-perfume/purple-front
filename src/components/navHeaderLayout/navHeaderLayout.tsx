import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { S } from "./styles";

function NavHeader() {
  return (
    <S.Wrapper>
      <NavigateBeforeIcon />
      <div>제목</div>
    </S.Wrapper>
  );
}
export default NavHeader;
