import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import StyledMuiCheckbox from "./Checkbox.style";

export interface CheckboxProps {
  checked: MuiCheckboxProps["checked"];
  disabled: MuiCheckboxProps["disabled"];
  inputRef: MuiCheckboxProps["inputRef"];
  indeterminate: MuiCheckboxProps["indeterminate"];
  onChange: MuiCheckboxProps["onChange"];
  required: MuiCheckboxProps["required"];
  value: MuiCheckboxProps["value"];
  inputProps: MuiCheckboxProps["inputProps"];
  error: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const { error, ...rest } = props;
  const checkBoxProps = {
    ...rest,
    ...(error ? { color: "error" as MuiCheckboxProps["color"] } : {}),
  };
  return <StyledMuiCheckbox {...checkBoxProps} disableRipple />;
};

export default Checkbox;
