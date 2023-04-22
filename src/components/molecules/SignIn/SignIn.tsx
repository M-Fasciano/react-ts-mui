import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { StyledForm, StyledFormWrapper } from "./SignIn.style";
import { useYupValidationResolver } from "../../../utils/validationResolver";
import {
  IFormInputs,
  validationSchemaSignIn,
} from "../../../constant/formsValidation";

const SignIn = () => {
  const resolver = useYupValidationResolver(validationSchemaSignIn);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver,
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ data });
  };

  return (
    <StyledFormWrapper>
      <h1>Sign in</h1>
      <p>Sign in with your Vision Direct account</p>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Button label="Sign in" type="submit" />
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default SignIn;
