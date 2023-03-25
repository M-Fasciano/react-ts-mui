import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { StyledTextArea } from "./Textarea.style";
export interface TextAreaProps {
  ref?: MuiTextFieldProps["ref"];
  name?: MuiTextFieldProps["name"];
  id?: MuiTextFieldProps["id"];
  onChange?: MuiTextFieldProps["onChange"];
  error?: MuiTextFieldProps["error"];
  helperText?: MuiTextFieldProps["helperText"];
  value?: MuiTextFieldProps["value"];
  defaultValue?: MuiTextFieldProps["defaultValue"];
  disabled?: MuiTextFieldProps["disabled"];
  multiline?: MuiTextFieldProps["multiline"];
  placeholder?: MuiTextFieldProps["placeholder"];
  minRows?: MuiTextFieldProps["minRows"];
}

function TextArea(props: TextAreaProps) {
  return <StyledTextArea {...props} />;
}

export default TextArea;
