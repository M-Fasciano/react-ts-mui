import * as yup from 'yup'

export interface IFormField<FieldName = string> {
  fieldName: FieldName;
  mandatory: string;
}

export interface IFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const SIGN_UP_FORM_FIELDS: IFormField<keyof IFormInputs>[] = [
  { fieldName: "email", mandatory: "true" },
  { fieldName: "firstName", mandatory: "true" },
  { fieldName: "lastName", mandatory: "true" },
  { fieldName: "password", mandatory: "true" },
];

export const validationSchemaSignUp = <FormFieldType extends IFormField>({
  formFields,
}: {
  formFields: FormFieldType[]
}) => {

  const yupObjectFields = formFields.reduce((prev, curr) => {
    let currentYupSchema = yup.string()
    const { fieldName } = curr
    const emptyFieldMessage = ('This is a required field')

    if (fieldName === 'email') {
      currentYupSchema = currentYupSchema
        .required("Email is required")
        .email("Email is invalid")
    }

    if (fieldName === 'firstName') {
      currentYupSchema = currentYupSchema
        .required("First name is required")
    }

    if (fieldName === 'lastName') {
      currentYupSchema = currentYupSchema
        .required("Last name is required")
    }

    if (fieldName === 'password') {
      currentYupSchema = currentYupSchema
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters")
    }

    if (curr.mandatory === 'true') {
      currentYupSchema = currentYupSchema.required(emptyFieldMessage)
    }

    return { ...prev, [fieldName]: currentYupSchema }
  }, {} as Record<keyof FormFieldType['fieldName'], yup.StringSchema>)

  return yup.object().shape(yupObjectFields)
}

export const validationSchemaSignIn = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
});