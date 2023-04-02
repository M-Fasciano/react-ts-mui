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
    border: `1px solid ${theme.palette.grey[400]}`,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
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
