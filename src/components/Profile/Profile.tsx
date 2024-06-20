import PersonIcon from '@mui/icons-material/Person';
import styled from "@emotion/styled";

const Profile = () => {
    return (
        <>
            <S.ProfileWrap>
                <PersonIcon sx={{ fontSize: "4rem", color: '#FFF' }} />
            </S.ProfileWrap>
        </>
    );
};

export default Profile;

const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C7C8CC;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const S = {
    ProfileWrap,
  };