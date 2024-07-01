"use client";

import Button from "@/components/atom/Button";
import { S } from "./styles";
import { ChangeEvent, useState } from "react";
import { TEXT_LENGTH } from "@/constant/common/textLength";

function NickNameOnBoarding() {
  const [nickNameLength, setNickNameLength] = useState("");
  const [focusInput, setFocusInput] = useState(false);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > TEXT_LENGTH) {
      e.target.value = e.target.value.slice(0, TEXT_LENGTH);
    }
    setNickNameLength(e.target.value);
  };

  return (
    <>
      <div>NavHeader</div>
      <S.Wrapper>
        <S.NicknameLabel>
          반가워요! 당신을 뭐라고 부르면 좋을까요?
        </S.NicknameLabel>
        <S.FormWrap>
          <S.NickNameInputWrap>
            <input
              maxLength={TEXT_LENGTH}
              value={nickNameLength}
              placeholder="2~10자 닉네임을 입력해주세요"
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
              onChange={handleInputValue}
            />
            {focusInput && <span>{nickNameLength.length}/10</span>}
          </S.NickNameInputWrap>
          <Button
            type="submit"
            disabled={nickNameLength.length === 0}
            buttonText="다음으로"
            size="primary"
          />
        </S.FormWrap>
      </S.Wrapper>
    </>
  );
}
export default NickNameOnBoarding;
