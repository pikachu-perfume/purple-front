"use client";

import { ReactNode, useState } from "react";
import { S } from "./styles";
import FavoritButtons from "../../atom/FavoriteButton/FavoritButtons";

type Props = {
  children: ReactNode;
};

const CommentBox = ({ children }: Props) => {
  const [isShowAllText, setIsShowAllText] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(2);

  const handleFavoriteClick = () => {
    setIsFavorite(prev => !prev);
    setFavoriteCount(prev => (isFavorite ? prev - 1 : prev + 1));
  };

  return (
    <S.Wrapper>
      {children}
      <S.ReviewText className={isShowAllText ? "" : "brief-text"}>
        “안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다 안개가
        자욱한 시원한 향기입니다 자욱한 시원한 향기입니다안개가 자욱한 시원한
        향기입니다 안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한
        향기입니다 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다
        안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한 향기입니다 자욱한
        시원한 향기입니다안개가 자욱한 시원한 향기입니다 안개가 자욱한 시원한
        향기입니다 안개가 자욱한 시원한 향기입니다 자욱한 시원한 향기입니다”
      </S.ReviewText>
      <S.BottomButtons>
        <FavoritButtons
          clickFavorite={handleFavoriteClick}
          isClicked={isFavorite}
          favoriteCount={favoriteCount}
        />
        <span onClick={() => setIsShowAllText(prev => !prev)}>
          {isShowAllText ? "간략히" : "더보기"}
        </span>
      </S.BottomButtons>
    </S.Wrapper>
  );
};

export default CommentBox;
