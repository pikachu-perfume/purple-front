import PersonIcon from "@mui/icons-material/Person";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Props = {
  width: string;
  height: string;
  image?: string;
  isEdit?: boolean;
  onClick?: () => void;
};

const Profile = ({ image, isEdit = false, width, height, onClick }: Props) => {
  return (
    <>
      <S.ProfileWrap style={{ width, height }} onClick={onClick}>
        {!image && (
          <PersonIcon sx={{ fontSize: "4rem", color: theme.color.white }} />
        )}
        {image && <img src={image} alt="user profile image" />}
        {isEdit && (
          <p>
            <span>편집</span>
          </p>
        )}
      </S.ProfileWrap>
    </>
  );
};

export default Profile;

const ProfileWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c7c8cc;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & > p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background: rgba(50, 50, 57, 0.5);
    color: ${theme.color.white};
  }
`;

const S = {
  ProfileWrap,
};
