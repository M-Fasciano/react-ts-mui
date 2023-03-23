import {
  styled,
  Alert as MuiAlert,
  alertClasses as MuiAlertClasses,
} from "@mui/material";

export const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  [`&.${MuiAlertClasses.root}`]: {
    borderRadius: 0,
    padding: theme.spacing(2),
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
