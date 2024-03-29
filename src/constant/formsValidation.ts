import * as yup from "yup";

export interface IFormInputs {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  phone?: string;
  date?: any;
}

export const validationSchemaSignUp = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export const validationSchemaSignIn = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required"),
});

export const validationSchemaReminder = yup.object().shape({
  phone: yup.string().required("Please enter a valid phone number"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Email is invalid"),
});
