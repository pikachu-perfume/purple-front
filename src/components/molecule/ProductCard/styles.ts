import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 141px;
`;

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const TextBox = styled.div`
  font-size: ${theme.fontSize.sm};
  margin-top: 1.2rem;

  & > span {
    color: ${theme.color.textDisabled};
    font-weight: ${theme.fontWeight.semiBold};
  }
  
  & > p {
    margin: 0;
    text-wrap: wrap;
    word-break: break-all;
  }
`;

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.textDisabled};
  font-size: ${theme.fontSize.xs};
`;

export const S = {
  Wrapper,
  ImageBox,
  Card,
  TextBox,
  RatingWrap
};
