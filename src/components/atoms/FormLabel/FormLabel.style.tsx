import {
  FormLabel as MuiFormLabel,
  formLabelClasses as MuiFormLabelClasses,
  styled,
} from "@mui/material";

export const StyledLabel = styled(MuiFormLabel)(({ theme }) => ({
  [`&.${MuiFormLabelClasses.root}`]: {},

  //  Error
  [`&.${MuiFormLabelClasses.error}`]: {
    color: theme.palette.error.main,
  },
}));
