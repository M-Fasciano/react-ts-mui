import React from "react";
import SignUp from "../molecules/SignUp";
import SignIn from "../molecules/SignIn";
import DynamicColumns from "../layouts/DynamicColumns";

function Login() {
  return (
    <DynamicColumns columnWidths={[50, 50]}>
      <SignUp />
      <SignIn />
    </DynamicColumns>
  );
}

export default Login;
