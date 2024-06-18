import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & > ul {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    width: max-content;
    padding: 0 1.6rem;
    margin: 0;
  }
`;

export const S = {
  Wrapper,
};
