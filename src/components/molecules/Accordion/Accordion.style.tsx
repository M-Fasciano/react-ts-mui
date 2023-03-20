import { Typography } from "@mui/material";
import styled from "styled-components";

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

  "@media (min-width: 1024px)": {
    maxWidth: "75%",
  },
}));
