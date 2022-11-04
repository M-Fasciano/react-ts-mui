import * as React from "react";
import { Typography } from "@mui/material";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Typography.style";

storiesOf("Typography", module).add("All", () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">H1 Example</Typography>
      <Typography variant="h2">H2 Example</Typography>
      <Typography variant="h3">H3 Example</Typography>
      <Typography variant="h4">H4 Example</Typography>
      <Typography variant="h5">H5 Example</Typography>
      <Typography variant="h6">H6 Example</Typography>
    </ThemeProvider>
  );
});
