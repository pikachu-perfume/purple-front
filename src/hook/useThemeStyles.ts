import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useThemeStyles = makeStyles((theme: Theme) => ({
  textMainColor: {
    color: theme.perfume.textMainColor,
  },
  textSubColor: {
    color: theme.perfume.textSubColor,
  },
  bgMainColor: {
    backgroundColor: theme.perfume.bgMainColor,
  },
}));

export default useThemeStyles;
