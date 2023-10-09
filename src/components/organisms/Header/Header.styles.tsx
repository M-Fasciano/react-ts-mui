import { Drawer, IconButton, styled } from "@mui/material";

export const StyledHeader = styled("header", {
  name: "Header",
})(() => ({}));

export const StyledNavWrapper = styled("div", {
  name: "NavWrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },

  h1: {
    margin: 0,
  },
}));

export const StyledDrawer = styled(Drawer, {
  name: "Drawer",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    maxWidth: "100%",
    padding: theme.spacing(2, 0),
  },
}));

export const StyledClodeButton = styled(IconButton, {
  name: "CloseButton",
})(({ theme }) => ({
  alignSelf: "flex-end",
  marginRight: theme.spacing(1),
}));
