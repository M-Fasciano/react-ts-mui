import React from "react";
import { Dayjs } from "dayjs";
import { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { getPopperSX, StyledDatePicker } from "./Datepicker.style";

export interface DatePickerProps {
  onChange: MuiDatePickerProps<Date, Date>["onChange"];
  renderInput: MuiDatePickerProps<Date, Date>["renderInput"];
  inputFormat: MuiDatePickerProps<Date, Date>["inputFormat"];
  PopperProps: {};
  components: {};
  disablePast: boolean;
}

function DatePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null | unknown>(null);
  const { ...restProps } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        {...restProps}
        value={value}
        PopperProps={{
          sx: getPopperSX(),
        }}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
