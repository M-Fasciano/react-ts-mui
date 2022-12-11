// import * as React from "react";
// import SignIn from "./Components/SignIn";
// import SignUp from "./Components/SignUp";
// import { ThemeProvider, Typography } from "@mui/material";
// import { theme } from "./stories/Typography/Typography.style";
// import Button from "./Components/UI/atoms/Button";

import styled from "styled-components";
import WistiaReactPlayer from "./Components/WistiaReactPlayer";
// import WistiaPlayerEmbed from "./Components/WistiaPlayerEmbed";

const StyledWrapper = styled("div")`
  display: flex;
  width: 100%;

  .container {
    width: 50%;
  }
`;

function App() {
  return (
    <StyledWrapper>
      {/* <Button primary size="large" label={"Hello world"} />
      <ThemeProvider theme={theme}>
        <Typography variant="h1">H1 Example</Typography>
        <Typography variant="h2">H2 Example</Typography>
        <Typography variant="h3">H3 Example</Typography>
        <Typography variant="h4">H4 Example</Typography>
        <Typography variant="h5">H5 Example</Typography>
        <Typography variant="h6">H6 Example</Typography>
      </ThemeProvider> */}
      {/* <SignUp />
      <SignIn /> */}

      <div className="container">
        <h1>React player</h1>
        <WistiaReactPlayer videoId="bq6epni33s" />
      </div>

      <div className="container">
        {/* <h1>Embed player</h1>
        <WistiaPlayerEmbed videoId="bq6epni33s" /> */}
      </div>
    </StyledWrapper>
  );
}

export default App;
