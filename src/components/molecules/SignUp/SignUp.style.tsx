import styled from "styled-components";

export const StyledFormWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 50%;
  }
`;

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
`;
