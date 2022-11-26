import React from "react";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps = {
  id?: string;
  label?: string;
  variant?: "filled" | "outlined" | "standard";
  type?: string;
  value?: any;
  helperText?: React.ReactNode;
  inputProps?: object;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
};

const TextField = (props: TextFieldProps) => {
  const {
    id,
    label,
    variant,
    type,
    value,
    helperText,
    inputProps,
    error,
    fullWidth,
    required,
  } = props;
  return (
    <MuiTextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      value={value}
      helperText={helperText}
      inputProps={inputProps}
      error={error}
      fullWidth={fullWidth}
      required={required}
    />
  );
};

export default TextField;
