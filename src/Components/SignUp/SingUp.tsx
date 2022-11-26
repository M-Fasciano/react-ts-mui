import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../UI/atoms/Button";
import TextField from "../UI/atoms/TextField";
import { StyledFormWrapper } from "./SignUp.style";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          required
          {...register("email", { required: true })}
          helperText={errors.email && <span>This field is required</span>}
        />
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          inputProps={{ maxLength: 20 }}
          required
          {...register("firstName", { required: true })}
          helperText={errors.firstName && <span>This field is required</span>}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          inputProps={{ maxLength: 20 }}
          required
          {...register("lastName", { required: true })}
          helperText={errors.lastName && <span>This field is required</span>}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          required
          {...register("password", { required: true })}
          helperText={errors.password && <span>This field is required</span>}
        />
        <Button label={"Create an account"} primary type="submit" />
      </form>
    </StyledFormWrapper>
  );
}

export default SingUp;
