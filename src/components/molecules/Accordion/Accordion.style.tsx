import { Typography } from "@mui/material";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

export const StyledWrapper = styled("div")(() => ({
  padding: "2rem",

  ".MuiAccordion-root": {
    boxShadow: "none",
    borderBottom: "1px solid #dddddd",

    "&::before": {
      content: "none",
    },

    "&.Mui-expanded": {
      margin: 0,
    },

    ".MuiButtonBase-root": {
      padding: 0,
    },

    ".MuiAccordionSummary-content": {
      margin: "20px 0",
    },
  },
}));

export const StyledTitle = styled(Typography)(() => ({}));

export const StyledContent = styled(Typography)(() => ({
  padding: "1rem 0",

  [theme.breakpoints.up("md")]: {
    maxWidth: "75%",
  },
}));
