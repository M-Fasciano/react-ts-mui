import React from "react";
import { SwitchProps as MuiSwitchProps } from "@mui/material";
import { StyledSwitch } from "./Switch.style";

export interface SwitchProps {
  disabled: MuiSwitchProps["disabled"];
  className: MuiSwitchProps["className"];
  checked: MuiSwitchProps["checked"];
  inputRef: MuiSwitchProps["inputRef"];
  onChange: MuiSwitchProps["onChange"];
  value: MuiSwitchProps["value"];
  required: MuiSwitchProps["required"];
  inputProps: MuiSwitchProps["inputProps"];
}

function Switch(props: SwitchProps) {
  return <StyledSwitch {...props} disableRipple />;
}

export default Switch;
