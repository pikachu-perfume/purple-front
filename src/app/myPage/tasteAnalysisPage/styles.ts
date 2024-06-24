import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const StaticsSection = styled.section`

`;

const Title = styled.span`
    display: block;
    padding: 1.6rem;
    font-weight: ${theme.fontWeight.semiBold};
`;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

const TasteStatisticsWrap = styled.div`
  padding: 0 1.6rem;
`;

export const S = {
  Title,
  HeaderInner,
  TasteStatisticsWrap,
  StaticsSection
};
