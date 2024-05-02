"use client";

import { useState } from "react";
import styled from "@emotion/styled";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectRating: number) => {
    setRating(selectRating);
  };
  return (
    <S.Wrapper>
      {[...Array(5)].map((_, idx) => (
        <div key={idx} onClick={() => handleRatingClick(idx + 1)}>
          {idx < rating ? (
            <img src="/assets/images/star.png" />
          ) : (
            <img src="/assets/images/starOpacity.png" />
          )}
        </div>
      ))}
    </S.Wrapper>
  );
}
export default Rating;

const Wrapper = styled.div`
  display: flex;

  & > div > * {
    margin: 0.6rem;
  }
`;

const S = {
  Wrapper,
};
