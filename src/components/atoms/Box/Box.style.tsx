import { styled } from "@mui/material/styles";

export const StyledBox = styled("div", {
  name: "Box",
  slot: "Root",
})<{
  variant: string;
  withBorder: boolean;
}>(({ variant, withBorder, theme }) => ({
  backgroundColor:
    variant === "light" ? theme.palette.common.white : theme.palette.grey[100],
  border: withBorder ? "1px solid " + theme.palette.grey[400] : "",
  borderRadius: withBorder ? "8px" : "",
  display: "flex",
  flexDirection: "column",
  padding: withBorder || variant === "dark" ? theme.spacing(2) : "",
  width: "auto",
}));
