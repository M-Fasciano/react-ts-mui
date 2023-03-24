import React from "react";
import { SnackbarProps as MuiSnackbarProps, Typography } from "@mui/material";
import { StyledSnackbar } from "./Snackbar.style";

export interface SnackbarProps {
  anchorOrigin: MuiSnackbarProps["anchorOrigin"];
  autoHideDuration: MuiSnackbarProps["autoHideDuration"];
  children: MuiSnackbarProps["children"];
  classes: MuiSnackbarProps["classes"];
  onClose: MuiSnackbarProps["onClose"];
  open?: MuiSnackbarProps["open"];
}

function Snackbar(props: SnackbarProps) {
  return (
    <StyledSnackbar {...props}>
      <Typography variant="body2">{props.children}</Typography>
    </StyledSnackbar>
  );
}

export default Snackbar;
