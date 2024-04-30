"use client";

import BottomBtn from "./BottomBtn/BottomBtn";
import DetailComment from "./Comment/DetailComment";
import DetailInfo from "./DetailInfo/DetailInfo";
import DetailTop from "./DetailTop";

function DetailPageContent() {
  return (
    <>
      <DetailTop />
      <DetailInfo />
      <DetailComment />
      <BottomBtn />
    </>
  );
}
export default DetailPageContent;
