"use client";

import Button from "@/components/atom/Button";
import { S } from "./styles";
import { ChangeEvent, useState } from "react";

function NickNameOnBoarding() {
  const [nickNameLength, setNickNameLength] = useState("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNickNameLength(e.target.value);
    console.log(nickNameLength, nickNameLength.length);
  };

  return (
    <>
      <div>NavHeader</div>
      <S.Wrapper>
        <S.NicknameLabel>
          반가워요! 당신을 뭐라고 부르면 좋을까요?
        </S.NicknameLabel>
        <S.NickNameInputWrap>
          <input
            maxLength={10}
            value={nickNameLength}
            placeholder="2~10자 닉네임을 입력해주세요"
            onChange={handleInputValue}
          />
          <span>{nickNameLength.length}/10</span>
        </S.NickNameInputWrap>
        <Button type="submit" buttonText="다음으로" />
      </S.Wrapper>
    </>
  );
}
export default NickNameOnBoarding;
