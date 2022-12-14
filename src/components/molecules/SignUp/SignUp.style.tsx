import styled from "styled-components";

export const StyledFormWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
  }

  .sign-up-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 600px;
  }
`;
