import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

theme.typography.h1 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(2.25em, 5vw, 2.75em)",
};

theme.typography.h2 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(2em, 5vw, 2.5em)",
};

theme.typography.h3 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.75em, 5vw, 2.25em)",
};

theme.typography.h4 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.5em, 5vw, 2em)",
};

theme.typography.h5 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.25em, 5vw, 1.75em)",
};

theme.typography.h6 = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1em, 5vw, 1.5em)",
};
