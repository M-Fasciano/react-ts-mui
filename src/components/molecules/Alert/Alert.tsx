import React from "react";
import { AlertProps as MuiAlertProps, Typography } from "@mui/material";
import { StyledAlert } from "./Alert.style";

export interface AlertProps {
  severity: MuiAlertProps["severity"];
  title?: string;
  message: string | React.ReactNode;
}

function Alert(props: AlertProps) {
  const { title, message, ...rest } = props;
  return (
    <StyledAlert variant="filled" {...rest}>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body2">{message}</Typography>
    </StyledAlert>
  );
}

export default Alert;
