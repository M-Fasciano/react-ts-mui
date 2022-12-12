import SignUp from "../molecules/SignUp";
import SignIn from "../molecules/SignIn";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: flex;
  width: 100%;

  .container {
    width: 50%;
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
