import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./Button.style";
import {
  Link as ReactRouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
export interface Button {
  label?: MuiButtonProps["children"];
  children?: MuiButtonProps["children"];
  variant?: MuiButtonProps["variant"];
  color?: MuiButtonProps["color"];
  size?: MuiButtonProps["size"];
  disabled?: MuiButtonProps["disabled"];
  className?: MuiButtonProps["className"];
  icon?: MuiButtonProps["startIcon"]; //  Aliased to startIcon since we only have icon
  type?: MuiButtonProps["type"];
  fullWidth?: MuiButtonProps["fullWidth"];
  name?: MuiButtonProps["name"];
}
interface StandardButton extends Button {
  href: MuiButtonProps["href"];
  onClick?: never;
  to?: never;
}

interface ActionButton extends Button {
  onClick: MuiButtonProps["onClick"];
  href?: never;
  to?: never;
}
interface InternalButton extends Button {
  to: RouterLinkProps["to"];
  href?: never;
  onClick?: never;
}

export type ButtonProps = StandardButton | ActionButton | InternalButton;

function Button(props: ButtonProps) {
  const { children, icon: startIcon, href, onClick, to, ...rest } = props;

  const buttonProps = {
    startIcon,
    ...(to
      ? { to, component: ReactRouterLink, children }
      : href
      ? { href, target: "_blank", children }
      : onClick
      ? { onClick, children }
      : { href: "/", children }),
    ...rest,
  };

  return <StyledButton disableRipple disableElevation {...buttonProps} />;
}

export default Button;
