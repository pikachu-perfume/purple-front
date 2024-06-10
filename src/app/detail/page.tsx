"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import styled from "@emotion/styled";
import DetailPageContent from "./_components";

function DetailPage() {
  return (
    <S.Wrapper>
      <NavHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <IosShareIcon sx={{ fontSize: "2.4rem" }} />
          <FavoriteBorderIcon sx={{ fontSize: "2.4rem", marginLeft: "2rem" }} />
        </div>
      </NavHeader>
      <DetailPageContent />
    </S.Wrapper>
  );
}
export default DetailPage;

const Wrapper = styled.div`
  position: relative;
`;

const S = {
  Wrapper,
};
