"use client";

import OAuthLoginButton from "@/component/atom/OAuthLoginButton";
import { S } from "./styles";

export default function SignIn() {
  return (
    <S.Wrapper>
      <div>Img</div>
      <OAuthLoginButton />
    </S.Wrapper>
  );
}
