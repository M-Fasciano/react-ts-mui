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
    borderRadius: 8,
  },

  //  Disabled
  [`&.${MuiButtonClasses.disabled}`]: {
    color: theme.palette.action.disabled,
  },

  //  Medium size
  [`&.${MuiButtonClasses.sizeMedium}`]: {
    padding: theme.spacing(1, 2),
  },

  //  Large size (set the same as medium since the DS doesn't have a large size)
  [`&.${MuiButtonClasses.sizeLarge}`]: {
    padding: theme.spacing(1, 2),
  },

  //  Small size
  [`&.${MuiButtonClasses.sizeSmall}`]: {
    padding: theme.spacing(0.75, 2),
  },
}));
