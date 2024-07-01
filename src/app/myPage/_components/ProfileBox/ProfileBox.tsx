import Profile from "@/components/Profile/Profile";
import { S } from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Props = {
  onClick: () => void;
};

const ProfileBox = ({ onClick }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <Profile width="6rem" height="6rem" />
      <S.textWrap>
        <div>
          <p>닉네임이 길면 이렇게 보이도록</p>
          <KeyboardArrowRightIcon
            sx={{ fontSize: "2.4rem", color: "#919193" }}
          />
        </div>
        <p>2leee@naver.com</p>
      </S.textWrap>
    </S.Wrapper>
  );
};

export default ProfileBox;
