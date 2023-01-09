import styled from "styled-components";

export const StyledWrapper = styled("div")(({ theme }) => ({
  padding: "2rem",

  ".faqs-title": {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 600,

    ".Mui-expanded": {
      transform: "rotate(0)",
    },
  },

  ".faqs-content": {
    fontSize: 12,
    padding: "1rem 0",
    maxWidth: "100%",

    "@media (min-width: 1024px)": {
      maxWidth: "75%",
    },
  },

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
  },
}));
