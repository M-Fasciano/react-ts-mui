import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../UI/atoms/Button";
import TextField from "../UI/atoms/TextField";
import { StyledFormWrapper } from "./SignUp.style";

interface IFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("hello");
  };

  return (
    <StyledFormWrapper>
      <h1>Create an account</h1>
      <p>
        Don't have an account? Manage all your vision care needs and get
        exclusive offers.
      </p>
      <form
        className="sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Controller
          name="email"
          control={control}
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              value={value}
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              required
              error={!!error}
              helperText={
                errors.email ? <span>This field is required</span> : ""
              }
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              value={value}
              label="First Name"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 20 }}
              required
              error={!!error}
              helperText={
                errors.firstName ? <span>This field is required</span> : ""
              }
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              value={value}
              label="Last Name"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 20 }}
              required
              error={!!error}
              helperText={
                errors.firstName ? <span>This field is required</span> : ""
              }
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              value={value}
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              error={!!error}
              helperText={
                errors.password ? <span>This field is required</span> : ""
              }
            />
          )}
        />
        <Button label={"Create an account"} primary type="submit" />
      </form>
    </StyledFormWrapper>
  );
}

export default SignUp;
