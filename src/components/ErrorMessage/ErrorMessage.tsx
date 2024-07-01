import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <S.Wrapper>
      <div>{error}</div>
    </S.Wrapper>
  );
};
export default ErrorMessage;

const Wrapper = styled.div`
  color: ${theme.color.error};
  font-size: ${theme.fontSize.xs};
`;

const S = {
  Wrapper,
};
