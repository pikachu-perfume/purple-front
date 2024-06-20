import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Title = styled.span`
    display: block;
    padding: 1.6rem;
    font-weight: ${theme.fontWeight.semiBold};
`;

const ProfileBoxOuter = styled.div`
    padding-bottom: 4.4rem;
`

export const S = {
    Title,
    ProfileBoxOuter
};
