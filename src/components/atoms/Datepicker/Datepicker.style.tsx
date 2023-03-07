import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)(() => ({}));

export const getPopperSX = () => ({
  ".MuiPickersDay-root": {
    height: 32,
    width: 32,
  },

  ".MuiDayPicker-weekDayLabel": {
    height: 32,
    width: 32,
  },
});
