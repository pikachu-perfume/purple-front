import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 10px;
    padding: 0;
    margin: 0;
    padding-bottom: 10px;

    & > li {
      width: 50vw;

      & > div {
        width: 100%;
        aspect-ratio: 1 / 1.3;

        div {
          border-radius: 0;
        }
      }
    }
  }
`;

export const S = {
  Wrapper,
};
