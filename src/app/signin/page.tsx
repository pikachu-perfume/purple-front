"use client";

import OAuthLoginButton from "@/component/atom/OAuthLoginButton";
import { S } from "./styles";
import { OauthType } from "@/app/constant/session";
import { clientCreateLoginTry } from "@/service/client/signInService";

export default function SignInPage() {
  const onClickLoginType = async (type: OauthType) => {
    const { uri } = await clientCreateLoginTry(type);
    window.open(uri);
  };

  return (
    <S.Wrapper>
      <div>Img</div>
      <OAuthLoginButton type={OauthType.KAKAO} onClick={onClickLoginType} />
    </S.Wrapper>
  );
}
