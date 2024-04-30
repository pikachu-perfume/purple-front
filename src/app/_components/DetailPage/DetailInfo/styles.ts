import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
`;

const NoteInfoWrap = styled.div``;

const PersistenceWrap = styled.div``;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 1rem;
  }
`;

const NoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const NoteContent = styled.div`
  display: flex;
  font-size: 1.6rem;
  margin-bottom: 2rem;

  & > span {
    margin-right: 1rem;
    color: gray;
    font-weight: 600;
  }
`;

export const S = {
  Wrapper,
  InfoTitle,
  NoteInfoWrap,
  PersistenceWrap,
  NoteInfo,
  NoteContent,
};
