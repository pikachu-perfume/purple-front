import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

function Button({
  clickCallback,
  buttonText,
  disabled,
  className,
  type,
  styleProps,
}: {
  clickCallback?: () => void;
  buttonText: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  styleProps?: CSSProperties;
}) {
  return (
    <ButtonBox className={className}>
      <button
        style={{ ...styleProps }}
        disabled={disabled}
        onClick={() => clickCallback?.()}
        type={type ?? "button"}
      >
        {buttonText}
      </button>
    </ButtonBox>
  );
}

export default Button;

const ButtonBox = styled.div<{
  color?: string;
  type?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > button {
    display: flex;
    background-color: ${theme.color.primary};
    flex-direction: row;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    border: none;
    outline: none;
    color: ${theme.color.white};

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.color.grayColor[200]};
      user-select: none;
      opacity: 0.6;
    }
  }
`;
