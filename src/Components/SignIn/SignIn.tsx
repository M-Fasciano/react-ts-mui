import React from "react";
import { StyledFormWrapper } from "../SignUp/SignUp.style";
import Button from "../UI/atoms/Button";
import TextField from "../UI/atoms/TextField";

function SignIn() {
  return (
    <StyledFormWrapper>
      <h1>Sign in</h1>
      <p>Sign in with your Vision Direct account</p>
      <form className="sign-up-form" noValidate>
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          required
        />
        <TextField label="Password" variant="outlined" fullWidth required />
        <Button label={"Sign in"} primary type="button" />
      </form>
    </StyledFormWrapper>
  );
}

export default SignIn;
