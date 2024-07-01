import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { COMMENT_FILTER_LIST } from "@/constant/dropdown/commentFilterList";
import Dropdown from "@/components/molecule/Dropdown/Dropdown";

const FilterBox = () => {
  const [selectedFilter, setSelectedFilter] = useState(
    COMMENT_FILTER_LIST[0].code,
  );

  const handleChangeSelectedFilter = (code: string) => {
    setSelectedFilter(code);
  };
  return (
    <S.FilterWrap>
      <p>
        전체 <span>25</span>건
      </p>
      <Dropdown
        selectedCode={selectedFilter}
        handleChangeSelectedFilter={handleChangeSelectedFilter}
        filterList={COMMENT_FILTER_LIST}
      />
    </S.FilterWrap>
  );
};

export default FilterBox;

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 1.2rem 1.6rem;

  & > p {
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.textColor[100]};

    & > span {
      color: ${theme.color.primary};
    }
  }
`;

const S = {
  FilterWrap,
};
