import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { StyledForm, StyledFormWrapper } from "./SignUp.style";
import { useYupValidationResolver } from "../../../utils/validationResolver";
import {
  validationSchemaSignUp,
  IFormInputs,
} from "../../../constant/formsValidation";

const SignUp = () => {
  const resolver = useYupValidationResolver(validationSchemaSignUp);

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
      <h1>Create an account</h1>
      <p>
        Don't have an account? Manage all your vision care needs and get
        exclusive offers.
      </p>
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
        <Button label="Create an account" primary type="submit" />
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default SignUp;
