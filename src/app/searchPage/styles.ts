import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const SearchTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-weight: 600;

    & > span:last-child {
        font-size: ${theme.fontSize.sm};
        font-weight: 400;
        color: ${theme.color.textDisabled};
    }
`

const SearchBarWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;

    & > div {
        width: calc(100% - 28px - 1.3rem);
    }

    & > button {
        font-size: ${theme.fontSize.base};
        border: 0;
        background: transparent;
        padding: 0;
        margin-left: 1.3rem;
    }
`;

export const S = {
    SearchTitle,
    SearchBarWrap
}