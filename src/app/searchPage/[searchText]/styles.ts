import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 74px);
  border-top: 1px solid #D9D9DE;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    line-height: 3.2rem;
    font-size: ${theme.fontSize.big};
    text-align: center;
    margin: 0 0 1.3rem 0;
  }

  button {
    background-color: transparent;
    border: 1px solid #CCCCCC;
    padding: 1.2rem 2rem;
    border-radius: 0.6rem;
  }
`;


export const S = {
  Wrapper,
};
