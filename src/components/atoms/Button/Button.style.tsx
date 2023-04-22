import {
  Button as MuiButton,
  buttonClasses as MuiButtonClasses,
  styled,
} from "@mui/material";

export const StyledButton = styled(MuiButton, {
  name: "Button",
  slot: "Root",
})(({ theme }) => ({
  [`&.${MuiButtonClasses.root}`]: {
    border: "1px solid transparent",
    borderRadius: 8,
  },

  //  Medium size
  [`&.${MuiButtonClasses.sizeMedium}`]: {
    border: "1px solid transparent",
    padding: theme.spacing(1.5, 2),
  },

  //  Large size (set the same as medium since the DS doesn't have a large size)
  [`&.${MuiButtonClasses.sizeLarge}`]: {
    border: "1px solid transparent",
    padding: theme.spacing(1, 2),
  },

  //  Small size
  [`&.${MuiButtonClasses.sizeSmall}`]: {
    border: "1px solid transparent",
    padding: theme.spacing(0.75, 2),
  },

  // Outlined
  [`&.${MuiButtonClasses.outlined}`]: {
    border: `1px solid ${theme.palette.primary.main}`,
  },

  //  Disabled
  [`&.${MuiButtonClasses.disabled}`]: {
    border: `1px solid ${theme.palette.action.disabled}`,
    color: theme.palette.action.disabled,
  },

  // Text
  [`&.${MuiButtonClasses.text}`]: {
    border: "1px solid transparent",

    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}));
