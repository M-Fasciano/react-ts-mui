import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  IFormInputs,
  validationSchemaReminder,
} from "../../../constant/formsValidation";
import { useYupValidationResolver } from "../../../utils/validationResolver";
import TextField from "@mui/material/TextField";

const Reminder = () => {
  const resolver = useYupValidationResolver(validationSchemaReminder);
  const [checked, setChecked] = useState({ off: true, on: false });
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [hasPhone, setHasPhone] = useState<Boolean>(true);
  const [hasEmail, setHasEmail] = useState<Boolean>(true);
  const [countryCallingCode, setCountryCallingCode] = useState<string>("");
  const [currentUserPhone, setCurrentUserPhone] =
    useState<string>("7879 111111");
  const [curentUserEmail, setCurentUserEmail] =
    useState<string>("test@test.com");

  const defaultValues = {
    phone: `${countryCallingCode} ${currentUserPhone}`,
    email: curentUserEmail,
    date: dayjs(date).format("DD/MM/YYYY"),
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues,
    resolver,
  });

  const handleResetRadio = (e: any) => {
    setIsVisible(!isVisible);
    setChecked(() => {
      return {
        off: false,
        on: false,
        [e.target.value]: true,
      };
    });
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ data });
  };

  const handlePhoneCheckbox = (e: any) => {
    setValue("phone", "");
    setHasPhone(e.target.checked);
  };

  const handleEmailCheckbox = (e: any) => {
    setValue("email", "");
    setHasEmail(e.target.checked);
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    if (!hasPhone && !hasEmail) {
      resetForm();
      setIsVisible(false);
      setChecked(() => ({ off: true, on: false }));
      setHasPhone(true);
      setHasEmail(true);
    }
  }, [hasEmail, hasPhone]);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((response) => {
        setValue(
          "phone",
          `${response.country_calling_code} ${currentUserPhone}`
        );
        setCountryCallingCode(response.country_calling_code);
      });
  }, [currentUserPhone, setValue]);

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
