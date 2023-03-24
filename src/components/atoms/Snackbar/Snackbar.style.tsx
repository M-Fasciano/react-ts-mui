import {
  Snackbar as MuiSnackbar,
  snackbarClasses as MuiSnackbarClasses,
  styled,
} from "@mui/material";

export const StyledSnackbar = styled(MuiSnackbar)(({ theme }) => ({
  [`&.${MuiSnackbarClasses.root}`]: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    color: theme.palette.common.white,
    padding: theme.spacing(2, 3),
    boxShadow: theme.shadows[4],
  },
}));
