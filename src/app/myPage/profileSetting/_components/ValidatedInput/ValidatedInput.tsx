import React from 'react';
import styled from "@emotion/styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { theme } from '@/styles/theme';

type Props = {
  labelText: string;
  id: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  validation: Record<string, any>;
};

const ValidatedInput = ({ labelText, id, register, errors, validation }: Props) => {
  return (
    <S.InputWrapper>
      <label htmlFor={id}>{labelText}</label>
      <input type="text" id={id} {...register(id, validation)} className={errors[id] ? 'redline' : ''} />
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
    background: #F7F8F9;
    padding: 2rem 2.4rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #E8ECF4;
    color: ${theme.color.textDisabled};

    &:focus {
      background: ${theme.color.white};
      color: ${theme.color.textColor[100]};
    }

    &.redline {
      border: 1px solid #FF3B3B;
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
  ValidatedText
};
