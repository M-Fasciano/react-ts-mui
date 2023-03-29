import React from "react";
import { FormLabelProps as MuiFormLabelProps } from "@mui/material";
import { Typography } from "@mui/material";
import { StyledLabel } from "./FormLabel.style";

export interface LabelProps {
  children: MuiFormLabelProps["children"];
  className: MuiFormLabelProps["className"];
  disabled: MuiFormLabelProps["disabled"];
  error: MuiFormLabelProps["error"];
  focused: MuiFormLabelProps["focused"];
  required: MuiFormLabelProps["required"];
}

function FormLabel(props: LabelProps) {
  return (
    <StyledLabel {...props}>
      <Typography variant="caption">{props.children}</Typography>
    </StyledLabel>
  );
}

export default FormLabel;
