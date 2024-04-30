import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  padding: 0 1.6rem;
  border: solid 1px #d9d9d9;
`;

const HeartBtn = styled(Typography)`
  display: flex;
  width: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & > button {
    height: 5rem;
    width: 14rem;
    margin-left: 2rem;
    border: none;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
  }

  & > button:first-child {
    background-color: #d9d9d9;
  }

  & > button:last-child {
    background-color: #ff6e62;
  }
`;

export const S = {
  Wrapper,
  HeartBtn,
  ButtonWrap,
};
