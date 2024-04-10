import styled from "@emotion/styled";
import Image from "next/image";
import kakaoLogo from "../../../../../public/assets/images/kakao_logo.png";

function KakaoOAuth() {
  return (
    <Wrapper>
      <KakaoImage src={kakaoLogo} alt="kakao-logo" />
      <span>카카오 로그인</span>
    </Wrapper>
  );
}
export default KakaoOAuth;

const Wrapper = styled.div`
  display: flex;
  background-color: #fee500;
  align-items: center;
  justify-content: center;
  width: 22.563rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const KakaoImage = styled(Image)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
