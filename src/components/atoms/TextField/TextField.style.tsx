import {
  styled,
  TextField as MuiTextField,
  inputBaseClasses as MuiInputBaseClasses,
  outlinedInputClasses as MuiOutlinedInputClasses,
  InputAdornment as MuiInputAdornment,
  inputAdornmentClasses as MuiInputAdornmentClasses,
  typographyClasses as MuiTypographyClasses,
} from "@mui/material";

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  [`& .${MuiInputBaseClasses.root}`]: {
    padding: theme.spacing(2),
  },

  [`& .${MuiInputBaseClasses.input}`]: {
    padding: theme.spacing(0),
  },

  [`& .${MuiOutlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.primary.main,
  },
}));

export const StyledInputAdornment = styled(MuiInputAdornment)(({ theme }) => ({
  [`&.${MuiInputAdornmentClasses.root} .${MuiTypographyClasses.root}`]: {
    color: theme.palette.primary.main,
  },
}));
