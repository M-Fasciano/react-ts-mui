import { styled, buttonClasses as MuiButtonClasses } from "@mui/material";
import Button from "../Button";

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  //  Contained Primary Variant
  [`&.${MuiButtonClasses.containedPrimary}`]: {
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
    "&:disabled": {
      backgroundColor: theme.palette.action.disabled,
    },
  },

  //  Outlined Variant
  [`&.${MuiButtonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    "&:focus": {
      backgroundColor: theme.palette.background.default,
    },
    "&:disabled": {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },

  //  Text Variant
  [`&.${MuiButtonClasses.text}`]: {
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:focus": {
      backgroundColor: theme.palette.action.hover,
    },
  },

  "& .MuiSvgIcon-root": {
    path: {
      fillOpacity: 1,
    },
  },
}));
