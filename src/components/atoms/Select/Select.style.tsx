import {
  styled,
  Select as MuiSelect,
  selectClasses as MuiSelectClasses,
  inputBaseClasses as MuiInputBaseClasses,
  outlinedInputClasses as MuiOutlinedInputClasses,
  svgIconClasses as MuiSvgIconClasses,
} from "@mui/material";

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  [`&.${MuiInputBaseClasses.root}`]: {
    border: `solid 1px ${theme.palette.primary.main}`,

    "&.Mui-open": {
      border: `solid 2px ${theme.palette.primary.main}`,
    },

    [`&.${MuiInputBaseClasses.error}`]: {
      border: `solid 1px ${theme.palette.error.main}`,
    },

    [`.${MuiSvgIconClasses.root}`]: {
      position: "absolute",
      pointerEvents: "none",
      right: 16,
    },
  },

  [`& .${MuiSelectClasses.select}`]: {
    border: "none",
    width: "100%",
    padding: theme.spacing(2),
  },

  [`.${MuiOutlinedInputClasses.notchedOutline}`]: {
    borderColor: "transparent",
  },
}));
