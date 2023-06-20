import React from "react";
import { StyledTextField, StyledInputAdornment } from "./TextField.style";
import {
  InputAdornmentProps as MuiInputAdornmentProps,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export interface TextFieldProps {
  ref?: MuiTextFieldProps["ref"];
  name?: MuiTextFieldProps["name"];
  id?: MuiTextFieldProps["id"];
  onChange?: MuiTextFieldProps["onChange"];
  error?: MuiTextFieldProps["error"];
  helperText?: MuiTextFieldProps["helperText"];
  value?: MuiTextFieldProps["value"];
  defaultValue?: MuiTextFieldProps["defaultValue"];
  disabled?: MuiTextFieldProps["disabled"];
  multiline?: MuiTextFieldProps["multiline"];
  placeholder?: MuiTextFieldProps["placeholder"];
  minRows?: MuiTextFieldProps["minRows"];
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  type?: MuiTextFieldProps["type"];
  rows?: MuiTextFieldProps["rows"];
  fullWidth?: MuiTextFieldProps["fullWidth"];
  inputRef?: MuiTextFieldProps["inputRef"];
  required?: MuiTextFieldProps["required"];
  label?: MuiTextFieldProps["label"];
  isPristine?: boolean;
  select?: MuiTextFieldProps["select"];
  InputLabelProps?: MuiTextFieldProps["InputLabelProps"];
  inputProps?: MuiTextFieldProps["inputProps"];
  showValidationstatus?: boolean;
  onKeyDown?: MuiTextFieldProps["onKeyDown"];
  autoComplete?: MuiTextFieldProps["autoComplete"];
}

function TextField(props: TextFieldProps) {
  const { icon, iconPosition = "left", prefix, suffix, ...rest } = props;

  const createInputProps = (
    position: MuiInputAdornmentProps["position"],
    children: MuiInputAdornmentProps["children"]
  ): object => {
    return {
      InputProps: {
        ...(position === "start"
          ? {
              startAdornment: (
                <StyledInputAdornment position="start">
                  {children}
                </StyledInputAdornment>
              ),
            }
          : {}),
        ...(position === "end"
          ? {
              endAdornment: (
                <StyledInputAdornment position="end">
                  {children}
                </StyledInputAdornment>
              ),
            }
          : {}),
      },
    };
  };

  const textFieldProps = {
    ...rest,
    ...(icon
      ? {
          ...(iconPosition === "left" ? createInputProps("start", icon) : {}),
          ...(iconPosition === "right" ? createInputProps("end", icon) : {}),
        }
      : {}),
    ...(prefix ? createInputProps("start", prefix) : {}),
    ...(suffix ? createInputProps("end", suffix) : {}),
  };

  return <StyledTextField {...textFieldProps} />;
}

export default TextField;
