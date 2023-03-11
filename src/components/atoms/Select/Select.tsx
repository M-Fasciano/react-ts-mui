import React from "react";
import {
  useTheme,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormControlProps as MuiFormControlProps,
  SelectChangeEvent,
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
  onChange?: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
  open?: boolean;
  error?: MuiFormControlProps["error"];
  focused?: MuiFormControlProps["focused"];
}

export default function Select(props: SelectProps) {
  const { value, options, defaultValue, error, focused, open } = props;
  const Icon = (props: any) => <IconKeyboardArrowDown {...props} />;
  const theme = useTheme();

  const StyledMenuProps = {
    PaperProps: {
      sx: {
        "& .MuiList-root": {
          width: "calc(100% - 4px)",
          border: `solid 2px ${theme.palette.primary.main}`,
          borderTop: 0,
          borderRadius: 1,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
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
      >
        {options &&
          options?.map((option: any) => (
            <MenuItem key={option.key} value={option.key || ""}>
              {option.value}
            </MenuItem>
          ))}
      </StyledSelect>
    </FormControl>
  );
}
