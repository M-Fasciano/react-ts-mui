import {
  styled,
  Checkbox as MuiCheckbox,
  checkboxClasses as MuiCheckboxClasses,
} from "@mui/material";

const StyledMuiCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  [`&.${MuiCheckboxClasses.root}`]: {
    borderRadius: 1,
    width: 16,
    height: 16,
  },

  "&.MuiCheckbox-colorError": {
    color: theme.palette.error.main,
  },
}));
export default StyledMuiCheckbox;
