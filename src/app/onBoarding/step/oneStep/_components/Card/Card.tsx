import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Card = () => {
  return (
    <S.Wrapper>
      <img src="/assets/images/bannerImg.png" />
      <span>Brand_1</span>
    </S.Wrapper>
  );
};

const Wrapper = styled.div`
  width: 13.1rem;
  height: 17.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 13.1rem;
  }

  & > span {
    margin: 1.5rem 0;
    color: ${theme.color.textDisabled};
  }
`;

const S = {
  Wrapper,
};
