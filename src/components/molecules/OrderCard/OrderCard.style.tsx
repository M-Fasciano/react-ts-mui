import { Badge, BadgeProps, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBoxInner = styled("div", {
  name: "OrderCard",
  slot: "BoxInner",
})(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 2),
  },
}));

export const StyledBoxHeader = styled("div", {
  name: "OrderCard",
  slot: "BoxHeader",
})(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
  },
}));

export const StyledBoxHeaderBodyLeft = styled("div", {
  name: "OrderCard",
  slot: "BoxHeaderBodyLeft",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing(6),
  },
}));

export const StyledBoxHeaderBodyRight = styled("div", {
  name: "OrderCard",
  slot: "BoxHeaderBodyRight",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
}));

export const StyledImageWrapper = styled("div", {
  name: "OrderCard",
  slot: "ImageWrapper",
})(() => ({
  display: "flex",
  height: 62,
  width: 122,
}));

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  width: "100%",

  "& .MuiBadge-badge": {
    ...theme.typography.subtitle2,
    width: 32,
    height: 32,
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    borderRadius: "50%",
    top: theme.spacing(+1.25),
  },
}));

export const StyledImage = styled("img", {
  name: "OrderCard",
  slot: "Image",
})(() => ({
  objectFit: "cover",
  width: "100%",
}));

export const StyledBoxBody = styled("div", {
  name: "OrderCard",
  slot: "BoxBody",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  margin: theme.spacing(3, 0, 6),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(0),
  },
}));

export const StyledBoxRow = styled("div", {
  name: "OrderCard",
  slot: "BoxRow",
})(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "70px 1fr",
  gap: theme.spacing(15),

  "&:last-child": {
    marginTop: theme.spacing(1),
  },

  a: {
    font: "inherit",
    marginLeft: theme.spacing(1),
  },
}));

export const StyledStatus = styled(Typography, {
  name: "OrderCard",
  slot: "Status",
  shouldForwardProp: (prop) => prop !== "statusColor",
})<{ statusColor: string }>(({ statusColor, theme }) => ({
  color: statusColor ? statusColor : theme.palette.text.primary,
  textTransform: "capitalize",
}));

export const StyledAlert = styled("div", {
  name: "OrderCard",
  slot: "Alert",
})(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
