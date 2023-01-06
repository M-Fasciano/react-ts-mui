import Heading from "../atoms/Heading";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../stories/Typography/Typography.style";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  margin: 2rem;
`;

function HeadingPage() {
  return (
    <StyledWrapper>
      <ThemeProvider theme={theme}>
        <Heading level={1}>H1 Example</Heading>
        <Heading level={2}>H2 Example</Heading>
        <Heading level={3}>H3 Example</Heading>
        <Heading level={4}>H4 Example</Heading>
        <Heading level={5}>H5 Example</Heading>
        <Heading level={6}>H6 Example</Heading>
      </ThemeProvider>
    </StyledWrapper>
  );
}

export default HeadingPage;
