import { AlertProps as MuiAlertProps, Typography } from "@mui/material";
import { IconCheckCircleOutline, IconInfo } from "../../atoms/Icons/action";
import { IconErrorOutline, IconWarning } from "../../atoms/Icons/alert";
import { StyledAlert } from "./Alert.style";

export interface AlertProps {
  severity: MuiAlertProps["severity"];
  title?: string;
  message: string;
}

function Alert(props: AlertProps) {
  const { title, message, ...rest } = props;
  return (
    <StyledAlert
      variant="filled"
      iconMapping={{
        success: <IconCheckCircleOutline />,
        info: <IconInfo />,
        warning: <IconWarning />,
        error: <IconErrorOutline />,
      }}
      {...rest}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body2">{message}</Typography>
    </StyledAlert>
  );
}

export default Alert;
