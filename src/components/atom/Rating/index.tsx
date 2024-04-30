"use client";

import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
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
          {idx < rating ? <StarIcon /> : <StarBorderIcon />}
        </div>
      ))}
    </S.Wrapper>
  );
}
export default Rating;

const Wrapper = styled.div`
  display: flex;

  & > div > * {
    font-size: 4.7rem;
    color: #ff6e62;
  }
`;

const S = {
  Wrapper,
};
