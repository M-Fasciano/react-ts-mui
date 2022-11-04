import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

theme.typography.h1 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4.8rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "6rem",
  },
};

theme.typography.h2 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1.25rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5rem",
  },
};

theme.typography.h3 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1.125rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "4rem",
  },
};

theme.typography.h4 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
  },
};

theme.typography.h5 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2rem",
  },
};

theme.typography.h6 = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1rem",
  },
};
