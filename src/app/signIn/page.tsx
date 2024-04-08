"use client";

import { S } from "./styles";
import Image from "next/image";
import kakaoLogin from "../../../public/assets/images/kakao_login.png";

export default function SignIn() {
  return (
    <S.Wrapper>
      <div>Img</div>
      <Image src={kakaoLogin} alt="logo" style={{ cursor: "pointer" }} />
    </S.Wrapper>
  );
}
