import {
  styled,
  Select as MuiSelect,
  selectClasses as MuiSelectClasses,
} from "@mui/material";

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  "&.MuiInputBase-root": {
    border: `solid 1px`,

    "&.Mui-focused": {
      border: `solid 2px ${theme.palette.primary.main}`,
    },

    "&.Mui-open": {
      border: `solid 2px ${theme.palette.primary.main}`,
    },

    "&.Mui-error": {
      border: `solid 1px ${theme.palette.error.main}`,
    },
  },

  [`& .${MuiSelectClasses.select}`]: {
    border: "none",
  },

  ".MuiSvgIcon-root": {
    position: "absolute",
    pointerEvents: "none",
    right: 16,
  },

  ".MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
}));
