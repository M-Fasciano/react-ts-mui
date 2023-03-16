import {
  styled,
  TextField as MuiTextField,
  inputBaseClasses as MuiInputBaseClasses,
} from "@mui/material";

export const StyledTextArea = styled(MuiTextField)(({ theme }) => ({
  [`& .${MuiInputBaseClasses.root}`]: {
    padding: theme.spacing(2),
  },

  [`& .${MuiInputBaseClasses.input}`]: {
    padding: theme.spacing(0),
    resize: "auto",
  },
}));
