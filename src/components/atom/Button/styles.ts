import { theme } from "@/styles/theme";
import { SerializedStyles, css } from "@emotion/react";

const sizeCSS: Record<string, SerializedStyles> = {
  primary: css`
    width: 36rem;
    height: 6rem;
    padding: 16px 0;
    border-radius: 0.8rem;
    font-size: ${theme.fontSize.md};
  `,
};
export default sizeCSS;
