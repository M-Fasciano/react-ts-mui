import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const Reminder = ({
  control,
  handleSubmit,
  getValues,
  errors,
  handleResetRadio,
  onSubmit,
  handlePhoneCheckbox,
  handleEmailCheckbox,
  checked,
  date,
  isVisible,
  setDate,
  setValue,
}: any) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="off"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="off"
            control={<Radio />}
            label="I don't want to be reminded"
            checked={checked.off}
            onChange={handleResetRadio}
          />
          <FormControlLabel
            value="on"
            control={<Radio />}
            label="I want to be reminded"
            checked={checked.on}
            onChange={handleResetRadio}
          />
        </RadioGroup>
      </FormControl>

      {isVisible ? (
        <Stack spacing={2}>
          <Stack spacing={2}>
            <FormControlLabel
              value="Send a FREE text message reminder to:"
              control={
                <Checkbox defaultChecked onChange={handlePhoneCheckbox} />
              }
              label="Send a FREE text message reminder to:"
              labelPlacement="end"
            />
            <Controller
              render={({
                field: { value, ref, ...rest },
                fieldState: { error },
              }) => (
                <TextField
                  {...rest}
                  inputRef={ref}
                  label="Phone number"
                  variant="outlined"
                  type="text"
                  error={!!error}
                  helperText={errors.phone?.message}
                  value={getValues("phone")}
                />
              )}
              name="phone"
              control={control}
            />
          </Stack>
          <Stack spacing={2}>
            <FormControlLabel
              value="Send an email reminder to:"
              control={
                <Checkbox defaultChecked onChange={handleEmailCheckbox} />
              }
              label="Send an email reminder to:"
              labelPlacement="end"
            />
            <Controller
              render={({
                field: { value, ref, ...rest },
                fieldState: { error },
              }) => (
                <TextField
                  {...rest}
                  inputRef={ref}
                  label="Email address"
                  variant="outlined"
                  type="email"
                  inputProps={{ maxLength: 20 }}
                  error={!!error}
                  helperText={errors.email?.message}
                  value={getValues("email")}
                />
              )}
              name="email"
              control={control}
            />
          </Stack>
          <Stack spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                  setValue("date", dayjs(newValue).format("DD/MM/YYYY"));
                }}
                renderInput={(params) => <TextField {...params} />}
                disablePast
                inputFormat="DD / MM / YYYY"
              />
            </LocalizationProvider>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Save changes
            </Button>
            <Button variant="text">Cancel changes</Button>
          </Stack>
        </Stack>
      ) : null}
    </form>
  );
};

export default Reminder;
