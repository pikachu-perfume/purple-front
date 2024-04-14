"use client";

import { useState } from "react";
import { S } from "./styles";
import { Star, FiberManualRecord } from "@mui/icons-material";

type TresData = {
  text: string;
};

function Banner({ text }: TresData) {
  const [introduction, setIntroduction] = useState(false);

  const handleMoreBtn = () => {
    setIntroduction(!introduction);
  };

  return (
    <S.Wrapper>
      <S.BannerImg
        src={"/assets/images/test_image.png"}
        alt="img"
        width={300}
        height={300}
      />
      <S.ContentWrap>
        <S.TopContent>
          <span>바이레도</span>
          <S.Title>모하비 고스트 오 드 퍼퓸</S.Title>
          <S.Score>
            <Star style={{ color: "red" }} />
            <div>4.8</div>
            <S.CategoryWrap>
              <FiberManualRecord style={{ width: "4px" }} />
              <span>플로럴, 앰버</span>
            </S.CategoryWrap>
            <div></div>
          </S.Score>
        </S.TopContent>
        {introduction ? (
          <S.BannerInfo>{text}</S.BannerInfo>
        ) : (
          <>
            {text.length > 80 ? (
              <>
                <S.BannerInfo>
                  {text.slice(0, 80)}...
                  <span onClick={handleMoreBtn} style={{ color: "#9091a0" }}>
                    더보기
                  </span>
                </S.BannerInfo>
              </>
            ) : (
              <S.BannerInfo>{text}</S.BannerInfo>
            )}
          </>
        )}
      </S.ContentWrap>
    </S.Wrapper>
  );
}
export default Banner;
