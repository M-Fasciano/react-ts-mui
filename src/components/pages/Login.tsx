import SignUp from "../molecules/SignUp";
import SignIn from "../molecules/SignIn";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

function Login() {
  return (
    <StyledWrapper>
      <SignUp />
      <SignIn />
    </StyledWrapper>
  );
}

export default Login;
