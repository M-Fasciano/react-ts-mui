import React from "react";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../UI/atoms/Button";
import TextField from "../UI/atoms/TextField";
import { StyledFormWrapper } from "./SignUp.style";
import { useYupValidationResolver } from "../../utils/validationResolver";

interface IFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const SignUp = () => {
  const resolver = useYupValidationResolver(validationSchema);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver,
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ data });
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
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              required
              error={!!error}
              helperText={errors.email?.message}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              label="First Name"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 20 }}
              required
              error={!!error}
              helperText={errors.firstName?.message}
            />
          )}
          name="firstName"
          control={control}
        />
        <Controller
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              label="Last Name"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 20 }}
              required
              error={!!error}
              helperText={errors.lastName?.message}
            />
          )}
          name="lastName"
          control={control}
        />
        <Controller
          render={({
            field: { value, ref, ...rest },
            fieldState: { error },
          }) => (
            <TextField
              {...rest}
              inputRef={ref}
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              error={!!error}
              helperText={errors.password?.message}
            />
          )}
          name="password"
          control={control}
        />
        <Button label={"Create an account"} primary type="submit" />
      </form>
    </StyledFormWrapper>
  );
};

export default SignUp;
