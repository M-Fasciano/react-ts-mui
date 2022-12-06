import React from "react";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps = {
  id?: string;
  label?: React.ReactNode;
  variant?: "filled" | "outlined" | "standard";
  type?: React.InputHTMLAttributes<unknown>["type"];
  value?: unknown;
  helperText?: React.ReactNode;
  inputProps?: object;
  inputRef?: React.Ref<any>;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    inputRef,
    error,
    fullWidth,
    required,
    onChange,
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
      inputRef={inputRef}
      error={error}
      fullWidth={fullWidth}
      required={required}
      onChange={onChange}
    />
  );
};

export default TextField;
