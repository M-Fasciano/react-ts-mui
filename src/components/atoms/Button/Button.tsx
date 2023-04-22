import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./Button.style";
export interface ButtonProps {
  onClick?: MuiButtonProps["onClick"];
  children?: MuiButtonProps["children"];
  href?: MuiButtonProps["href"];
  variant?: MuiButtonProps["variant"];
  color?: MuiButtonProps["color"];
  size?: MuiButtonProps["size"];
  disabled?: MuiButtonProps["disabled"];
  className?: MuiButtonProps["className"];
  icon?: MuiButtonProps["startIcon"]; //  Aliased to startIcon since we only have icon
  type?: MuiButtonProps["type"];
  name?: MuiButtonProps["name"];
  label?: string;
}

function Button(props: ButtonProps) {
  const { children, icon: startIcon, ...rest } = props;
  const buttonProps = { startIcon, ...rest };

  return (
    <StyledButton disableRipple disableElevation {...buttonProps}>
      {children}
    </StyledButton>
  );
}

export default Button;
