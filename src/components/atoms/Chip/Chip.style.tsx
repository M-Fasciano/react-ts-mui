import {
  Chip as MuiChip,
  chipClasses as MuiChipClasses,
  styled,
} from "@mui/material";

export const StyledChip = styled(MuiChip, {
  name: "Chip",
  slot: "Chip",
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  [`&.${MuiChipClasses.root}`]: {
    backgroundColor: isActive
      ? theme.palette.grey[300]
      : theme.palette.common.white,
    borderRadius: theme.spacing(20),
    border: `1px solid ${theme.palette.grey[400]}`,
    cursor: "pointer",
    fontSize: "10px",
    lineHeight: "150%",
    padding: theme.spacing(0, 2),
    transition: "none",

    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },

    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },

    "&:active": {
      boxShadow: "none",
    },

    [`&.${MuiChipClasses.disabled}`]: {
      opacity: 0.3,
    },

    [`.${MuiChipClasses.label}`]: {
      padding: theme.spacing(0),
    },
  },

  ".MuiTouchRipple-root": {
    display: "none",
  },

  [`.${MuiChipClasses.deleteIcon}`]: {
    color: theme.palette.text.primary,
    fontSize: "24px",
    margin: theme.spacing(0, 0, 0, 1),

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },

  [`&.${MuiChipClasses.deletable}`]: {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const StyledChipWrapper = styled("div", {
  name: "ChipWrapper",
  slot: "ChipWrapper",
})(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));
