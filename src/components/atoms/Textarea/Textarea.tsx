import { TextareaAutosizeProps as MuiTextareaProps } from "@mui/material";
import { StyledTextarea } from "./Textarea.style";

export interface TextareaProps {
  ref?: MuiTextareaProps["ref"];
  maxRows?: MuiTextareaProps["maxRows"];
  minRows?: MuiTextareaProps["minRows"];
  defaultValue?: MuiTextareaProps["defaultValue"];
  disabled?: MuiTextareaProps["disabled"];
  error?: boolean;
  className?: string;
}

function Textarea(props: TextareaProps) {
  return (
    <StyledTextarea
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      {...props}
    />
  );
}

export default Textarea;
