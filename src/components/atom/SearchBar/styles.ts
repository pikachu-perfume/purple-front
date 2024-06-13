import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { css } from '@emotion/react'

const dynamicWrapperStyle = ({showSearchIcon}: {showSearchIcon: boolean}) =>
  css`
    padding: ${showSearchIcon ? '1.2rem 1rem' : '1.2rem 1.6rem'};
  `;

const dynamicSearchInputStyle = ({
  fontSize, 
  showSearchIcon
}: {
  fontSize: string, 
  showSearchIcon: boolean
}) =>
  css`
    font-size: ${fontSize === 'sm' ? theme.fontSize.sm : theme.fontSize.base};
    margin-left: ${showSearchIcon ? '1rem' : '0'}
  `;

const Wrapper = styled.div`
  background-color: ${theme.color.grayColor[100]};
  width: 100%;
  ${dynamicWrapperStyle};
  display: flex;
  align-items: center;
  border-radius: 3.2rem;
`;

const SearchWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  ${dynamicSearchInputStyle};
  outline: 0;
`;

export const S = {
  Wrapper,
  SearchWrap,
  SearchInput,
};
