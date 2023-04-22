import React from "react";
import {
  useTheme,
  SelectProps as MuiSelectProps,
  FormControlProps as MuiFormControlProps,
  FormControl,
} from "@mui/material";
import { StyledSelect } from "./Select.style";
import { IconKeyboardArrowDown } from "../Icons/hardware";
export interface SelectProps {
  name?: MuiSelectProps["name"];
  displayEmpty?: MuiSelectProps["displayEmpty"];
  defaultValue?: MuiSelectProps["defaultValue"];
  options?: any;
  value?: MuiSelectProps["value"];
  multiple?: MuiSelectProps["multiple"];
  onChange?: MuiSelectProps["onChange"];
  open?: boolean;
  error?: MuiFormControlProps["error"];
  focused?: MuiFormControlProps["focused"];
  children?: MuiSelectProps["children"];
}

export default function Select(props: SelectProps) {
  const { value, children, defaultValue, error, focused, open, ...rest } =
    props;
  const Icon = (props: JSX.Element) => <IconKeyboardArrowDown {...props} />;
  const theme = useTheme();

  const StyledMenuProps = {
    PaperProps: {
      sx: {
        "&.MuiPaper-root": {
          border: `solid 2px ${theme.palette.primary.main}`,
          borderTop: 0,
          borderRadius: 1,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: theme.spacing(1),
        },
      },
    },
  };

  return (
    <FormControl error={error} focused={focused} fullWidth>
      <StyledSelect
        value={value}
        MenuProps={StyledMenuProps}
        IconComponent={Icon}
        defaultValue={defaultValue}
        open={open}
        className={open ? "Mui-open" : ""}
        {...rest}
      >
        {children}
      </StyledSelect>
    </FormControl>
  );
}
