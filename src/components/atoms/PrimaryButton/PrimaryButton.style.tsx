import { styled, buttonClasses as MuiButtonClasses } from "@mui/material";
import Button from "../Button";

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  //  Contained Primary Variant
  [`&.${MuiButtonClasses.containedPrimary}`]: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.text.primary,
    },
    "&:disabled": {
      backgroundColor: theme.palette.action.disabled,
    },
  },

  //  Outlined Variant
  [`&.${MuiButtonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.grey[400]}`,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
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
