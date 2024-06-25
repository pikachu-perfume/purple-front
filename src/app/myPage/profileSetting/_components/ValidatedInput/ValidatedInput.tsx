import React from "react";
import styled from "@emotion/styled";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";
import { theme } from "@/styles/theme";

type Props = {
  labelText: string;
  id: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  validation: Record<string, any>;
  setError: UseFormSetError<any>;
};

const ValidatedInput = ({
  labelText,
  id,
  register,
  errors,
  validation,
  setError,
}: Props) => {
  {
    /* TODO: 서버 resp로 setError 설정 추가 필요 */
  }

  return (
    <S.InputWrapper>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="text"
        id={id}
        {...register(id, validation)}
        className={errors[id] ? "redline" : ""}
      />
      {errors[id] && <S.ValidatedText>{errors[id]?.message}</S.ValidatedText>}
    </S.InputWrapper>
  );
};

export default ValidatedInput;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > label {
    padding-bottom: 1.6rem;
    font-weight: ${theme.fontWeight.semiBold};
  }

  & > input {
    background: #f7f8f9;
    padding: 2rem 2.4rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e8ecf4;
    color: ${theme.color.textDisabled};

    &:focus {
      background: ${theme.color.white};
      color: ${theme.color.textColor[100]};
    }

    &.redline {
      border: 1px solid #ff3b3b;
      background: ${theme.color.white};
    }
  }
`;

const ValidatedText = styled.p`
  color: ${theme.color.red};
  font-size: ${theme.fontSize.xs};
  padding-top: 0.8rem;
`;

const S = {
  InputWrapper,
  ValidatedText,
};
