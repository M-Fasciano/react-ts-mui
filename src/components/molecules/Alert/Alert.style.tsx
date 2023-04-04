import {
  styled,
  Alert as MuiAlert,
  alertClasses as MuiAlertClasses,
} from "@mui/material";

export const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  [`&.${MuiAlertClasses.root}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.info.light,
    padding: theme.spacing(2),

    a: {
      color: "inherit",
      textDecorationColor: "inherit",
    },
  },

  [`& .${MuiAlertClasses.icon}`]: {
    marginRight: theme.spacing(2),
    padding: 0,
  },

  [`& .${MuiAlertClasses.message}`]: {
    padding: 0,
  },

  [`&.${MuiAlertClasses.filledSuccess}`]: {
    backgroundColor: theme.palette.success,
  },

  [`&.${MuiAlertClasses.filledError}`]: {
    backgroundColor: theme.palette.error,
  },
}));
