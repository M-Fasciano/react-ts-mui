import {
  Chip as MuiChip,
  chipClasses as MuiChipClasses,
  styled,
} from "@mui/material";

export const StyledChip = styled(MuiChip, {
  name: "Chip",
  slot: "Chip",
})(({ theme }) => ({
  [`&.${MuiChipClasses.root}`]: {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(20),
    border: `1px solid ${theme.palette.grey[300]}`,
    cursor: "pointer",
    fontSize: "10px",
    lineHeight: "150%",
    padding: theme.spacing(3.75, 6),
    transition: "none",

    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
      padding: theme.spacing(3.5, 8),
    },

    "&.selected": {
      backgroundColor: theme.palette.primary.main,
    },

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
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
    margin: theme.spacing(0, -2, 0, 4),

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },

  [`&.${MuiChipClasses.deletable}`]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledChipWrapper = styled("div", {
  name: "ChipWrapper",
  slot: "ChipWrapper",
})(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(4),
}));
