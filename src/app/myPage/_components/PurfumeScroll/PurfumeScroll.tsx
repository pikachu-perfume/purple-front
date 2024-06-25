import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import ProductHorizontalScroll from "../../../searchPage/_components/ProductList/ProductHorizontalScroll";

const PurfumeScroll = () => {
  return (
    <>
      <S.TitleWrap>
        <div>
          <span>인생향수</span>
          <span>5</span>
        </div>
        <span>더보기</span>
      </S.TitleWrap>
      <ProductHorizontalScroll />
    </>
  );
};

export default PurfumeScroll;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;

  & > div {
    span {
      &:first-child {
        font-weight: ${theme.fontWeight.bold};
      }

      &:last-child {
        font-weight: ${theme.fontWeight.semiBold};
        margin-left: 0.4rem;
        color: ${theme.color.primary};
      }
    }
  }

  & > span {
    color: ${theme.color.textDisabled};
  }
`;

const S = {
  TitleWrap,
};
