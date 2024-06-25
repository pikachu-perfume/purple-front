"use client";

import styled from "@emotion/styled";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";

const MyCommentsPage = () => {
  return (
    <>
      <NavHeader>
        <S.HeaderInner>
          <span>작성한 코멘트</span>
        </S.HeaderInner>
      </NavHeader>
    </>
  );
};

export default MyCommentsPage;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

export const S = {
  HeaderInner,
};
