import { styled, buttonClasses as MuiButtonClasses } from "@mui/material";
import Button from "../Button";

export const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  //  Contained Success Variant
  [`&.${MuiButtonClasses.containedSuccess}`]: {
    border: "1px solid transparent",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.success,
    },
    "&:disabled": {
      backgroundColor: theme.palette.action.disabled,
    },
  },

  //  Outlined Success Variant
  [`&.${MuiButtonClasses.outlinedSuccess}`]: {
    border: `1px solid ${theme.palette.success.main}`,
    "&:hover": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    "&:focus": {
      borderColor: theme.palette.background.default,
    },
    "&:disabled": {
      borderColor: theme.palette.action.disabled,
    },
  },

  //  Text Variant
  [`&.${MuiButtonClasses.text}`]: {
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: theme.palette.success.main,
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
