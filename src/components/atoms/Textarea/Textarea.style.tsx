import { styled } from "@mui/material";

import TextareaAutosize from "@mui/base/TextareaAutosize";

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  "&.textarea": {
    borderRadius: 8,
    fontFamily: '"Open Sans", "Arial", sans-serif',
    fontSize: 14,
    lineHeight: "21px",
    padding: theme.spacing(1, 2),
    maxWidth: 343,
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      fontSize: 16,
      lineHeight: "24px",
    },

    "&:focus-visible": {
      borderColor: theme.palette.primary.main,
    },

    "&--error": {
      borderColor: theme.palette.error.main,
    },
  },
}));
