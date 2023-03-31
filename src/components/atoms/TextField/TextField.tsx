import React from "react";
import {
  InputAdornmentProps as MuiInputAdornmentProps,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { StyledInputAdornment, StyledTextField } from "./TextField.style";

type TextFieldProps = {
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
  inputRef?: MuiTextFieldProps["inputRef"];
  label?: MuiTextFieldProps["label"];
  variant?: MuiTextFieldProps["variant"];
  fullWidth?: MuiTextFieldProps["fullWidth"];
  required?: MuiTextFieldProps["required"];
  inputProps?: MuiTextFieldProps["inputProps"];
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  type?: MuiTextFieldProps["type"];
  rows?: MuiTextFieldProps["rows"];
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
};

const TextField = (props: TextFieldProps) => {
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
};

export default TextField;
